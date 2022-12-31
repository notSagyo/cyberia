import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { OnProgressProps } from 'react-player/base';
import IconMuted from '../Icons/IconMuted';
import IconNextTrack from '../Icons/IconNextTrack';
import IconPause from '../Icons/IconPause';
import IconPlay from '../Icons/IconPlay';
import IconSound from '../Icons/IconSound';
import Shell, { ShellProps } from '../Shell/Shell';
import styles from './CustomPlayer.module.scss';
import {
  getPlayedString,
  isPlaylist,
  saveSongToStorage,
} from './CustomPlayerHelper';
import { ISong } from '/types/song';

export const storageSongKey = 'react-player-song';
export const storagePausedKey = 'react-player-paused';
const storageVolumeKey = 'react-player-volume';
const storageMutedKey = 'react-player-muted';

export interface CustomPlayerProps extends ReactPlayerProps {
  song: ISong;
  autoplay?: boolean;
  saveToStorage?: boolean;
  initialVolume?: number;
  shellProps?: ShellProps;
  onFirstLoad?: (player: ReactPlayer) => void;
  onSeekStart?: Function;
  onSeekChange?: Function;
  onSeekEnd?: Function;
}

// ?BUG: Keeps duration in localstorage when changing songs paused
/** Always import this component with next/dynamic */
const CustomPlayer = ({
  song,
  autoplay,
  saveToStorage,
  initialVolume,
  shellProps,
  onSeekStart,
  onSeekChange,
  onSeekEnd,
  ...props
}: CustomPlayerProps) => {
  const [playedOnce, setPlayedOnce] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [volume, setVolume] = useState(initialVolume || 1);
  const [muted, setMuted] = useState(false);
  const [displayRemaining, setDisplayRemaining] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const audio = new Audio();
    const checkPlaying = setInterval(() => {
      if (audio.paused) return audio.play().catch(() => {});
      clearInterval(checkPlaying);
      setPlayedOnce(true);
      setPlaying(true);
      audio.remove();
    }, 250);
    return () => clearInterval(checkPlaying);
  }, [autoplay]);

  // Listen to playing prop changes
  useEffect(() => {
    if (props.playing != null) setPlaying(props.playing);
  }, [autoplay, playedOnce, props.playing]);

  // Event handlers
  const handleProgress = (state: OnProgressProps) => {
    props.onProgress && props.onProgress(state);
    if (!seeking) setPlayed(state.played);
    if (saveToStorage && played > 0)
      saveSongToStorage({ ...song, time: played * duration }, playerRef);
  };

  const handleSeekMouseDown = () => {
    onSeekStart && onSeekStart();
    setSeeking(true);
  };

  const handleSeekChange = (e: React.ChangeEvent) => {
    onSeekChange && onSeekChange();
    setPlayed(parseFloat((e.target as HTMLInputElement).value));
  };

  const handleSeekMouseUp = (e: React.MouseEvent) => {
    onSeekEnd && onSeekEnd();
    setSeeking(false);
    playerRef.current?.seekTo(parseFloat((e.target as HTMLInputElement).value));
  };

  const handlePreviousTrack = () => {
    if (song.source == 'youtube')
      playerRef.current?.getInternalPlayer().previousVideo();
  };

  const handleNextTrack = () => {
    if (song.source == 'youtube')
      playerRef.current?.getInternalPlayer().nextVideo();
    else playerRef.current?.seekTo(0.9999);
  };

  const handleVolumeChange = (e: React.ChangeEvent) => {
    const volume = (e.target as HTMLInputElement).value;
    localStorage.setItem(storageVolumeKey, volume);
    setVolume(parseFloat(volume));
    setMuted(false);
  };

  const handleMute = () => {
    setMuted((s) => {
      localStorage.setItem(storageMutedKey, String(Number(!s)));
      return !s;
    });
  };

  const handlePlay = () => {
    setPlaying(true);
    props.onPlay && props.onPlay();
    playerRef.current && setDuration(playerRef.current.getDuration());
    saveToStorage && localStorage.setItem(storagePausedKey, String(Number(0)));
  };

  const handlePause = () => {
    setPlaying(false);
    props.onPause && props.onPause();
    saveToStorage && localStorage.setItem(storagePausedKey, String(Number(1)));
  };

  const handlePlayPause = () => {
    if (playing) handlePause();
    else handlePlay();
  };

  const handleReady = (reactPlayer: ReactPlayer) => {
    props.onReady && props.onReady(reactPlayer);
    const storageVolume = localStorage.getItem(storageVolumeKey);
    const storageMuted = localStorage.getItem(storageMutedKey);
    storageVolume && setVolume(parseFloat(storageVolume));
    storageMuted && setMuted(Boolean(Number(storageMuted)));
  };

  return (
    <Shell
      {...shellProps}
      shellTitle={song.title}
      onMaximize={(maximized) => setMaximized(maximized)}
      bodyProps={{
        ...shellProps?.bodyProps,
        className: cn(shellProps?.bodyProps?.className, styles.shellBody),
      }}
    >
      {/* PLAYER */}
      <div className={cn(styles.playerWrapper, !maximized && 'hidden')}>
        <ReactPlayer
          {...props}
          ref={playerRef}
          key={song.url}
          url={song.url}
          playing={playing}
          volume={volume}
          muted={muted}
          onProgress={handleProgress}
          onReady={handleReady}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>

      {/* CONTROLS */}
      <div className={styles.controls}>
        {/* PREV SONGS */}
        {isPlaylist(song.url) && (
          <div className={styles.button} onClick={handlePreviousTrack}>
            <IconNextTrack style={{ transform: 'rotateZ(180deg)' }} />
          </div>
        )}
        {/* PLAY / PAUSE */}
        <div className={styles.button} onClick={handlePlayPause}>
          {playing ? <IconPause /> : <IconPlay />}
        </div>
        {/* NEXT SONG */}
        {isPlaylist(song.url) && (
          <div className={styles.button} onClick={handleNextTrack}>
            <IconNextTrack />
          </div>
        )}
        {/* PROGRESS */}
        <div className={cn(styles.slider, styles.progressSlider)}>
          <input
            type="range"
            step="any"
            max={1}
            value={played}
            onMouseDown={handleSeekMouseDown}
            onMouseUp={handleSeekMouseUp}
            onChange={handleSeekChange}
          />
        </div>
        {/* TIME PLAYED */}
        <div
          className={styles.played}
          onClick={() => setDisplayRemaining((s) => !s)}
        >
          {getPlayedString(duration, played, displayRemaining)}
        </div>
        {/* MUTE */}
        <div className={styles.button} onClick={handleMute}>
          {muted ? <IconMuted /> : <IconSound />}
        </div>
        {/* VOLUME */}
        <div className={styles.slider}>
          <input
            type="range"
            step="any"
            max={1}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </Shell>
  );
};

export default CustomPlayer;

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
import { getPlayedString, isPlaylist } from './CustomPlayerHelper';
import { ISong, SongSource } from '/types/song';

const storageVolumeKey = 'ReactPlayerVolume';

export interface CustomPlayerProps extends ReactPlayerProps {
  song: ISong;
  autoplay?: boolean;
  initialVolume?: number;
  shellProps?: ShellProps;
  onSeekStart?: Function;
  onSeekChange?: Function;
  onSeekEnd?: Function;
}

// ?TODO: Load last song from ls
/** Always import this component with next/dynamic */
const CustomPlayer = ({
  song,
  shellProps,
  onSeekStart,
  onSeekChange,
  onSeekEnd,
  initialVolume,
  autoplay,
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
  const [source] = useState<SongSource>(song.source || 'youtube');
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
    }, 500);
    return () => clearInterval(checkPlaying);
  }, [autoplay]);

  // Listen to playing prop changes
  useEffect(() => {
    if (props.playing == null) return;
    if (autoplay && playedOnce) setPlaying(props.playing);
    if (!autoplay) setPlaying(props.playing);
  }, [autoplay, playedOnce, props.playing]);

  // Event handlers
  const handleProgress = (state: OnProgressProps) => {
    props.onProgress && props.onProgress(state);
    if (seeking) return;
    setPlayed(state.played);
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
    if (source == 'youtube')
      playerRef.current?.getInternalPlayer().previousVideo();
  };

  const handleNextTrack = () => {
    if (source == 'youtube') playerRef.current?.getInternalPlayer().nextVideo();
    else playerRef.current?.seekTo(0.9999);
  };

  const handleVolumeChange = (e: React.ChangeEvent) => {
    const volume = (e.target as HTMLInputElement).value;
    localStorage.setItem(storageVolumeKey, volume);
    setVolume(parseFloat(volume));
    setMuted(false);
  };

  const handleMute = () => {
    setMuted((s) => !s);
  };

  const handlePlay = () => {
    props.onPlay && props.onPlay();
    playerRef.current && setDuration(playerRef.current.getDuration());
    // !XXX: debug log
    console.log(playerRef?.current?.getInternalPlayer());
  };

  const handleReady = (player: ReactPlayer) => {
    props.onReady && props.onReady(player);
    const storageVolume = localStorage.getItem(storageVolumeKey);
    storageVolume && setVolume(parseFloat(storageVolume));
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
        <div className={styles.button} onClick={() => setPlaying((s) => !s)}>
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

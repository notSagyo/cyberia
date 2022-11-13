import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { OnProgressProps } from 'react-player/base';
import Shell, { ShellProps } from '../Shell/Shell';
import styles from './CustomPlayer.module.scss';
import { getPlayedString, isPlaylist } from './CustomPlayerHelper';

export interface CustomPlayerProps extends ReactPlayerProps {
  title: string;
  autoplay?: boolean;
  initialVolume?: number;
  shellProps?: ShellProps;
  onSeekStart?: Function;
  onSeekChange?: Function;
  onSeekEnd?: Function;
}

// TODO: Maximizable
// TODO: Fix console play messages
// TODO: Save volume on localStorage
/** Always import this component with next/dynamic */
const CustomPlayer = ({
  title,
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
  const playerRef = useRef<ReactPlayer>(null);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const audio = new Audio();
    const checkPlaying = setInterval(() => {
      if (audio.paused) return audio.play();
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
    if (!playerRef.current) return;
    setSeeking(false);
    playerRef.current.seekTo(parseFloat((e.target as HTMLInputElement).value));
  };

  const handleSkipTrack = () => {
    playerRef.current && playerRef.current.seekTo(0.9999);
  };

  const handleVolumeChange = (e: React.ChangeEvent) => {
    setVolume(parseFloat((e.target as HTMLInputElement).value));
    setMuted(false);
  };

  const handleMute = () => {
    setMuted((s) => !s);
  };

  const handlePlay = () => {
    props.handlePlay && props.handlePlay();
    playerRef.current && setDuration(playerRef.current.getDuration());
  };

  return (
    <Shell
      {...shellProps}
      shellTitle={title}
      bodyProps={{
        ...shellProps?.bodyProps,
        className: cn(shellProps?.bodyProps?.className, styles.shellBody),
      }}
    >
      {/* PLAYER */}
      <ReactPlayer
        {...props}
        ref={playerRef}
        playing={playing}
        volume={volume}
        muted={muted}
        onProgress={handleProgress}
        onPlay={handlePlay}
        className={'hidden'}
      />

      {/* CONTROLS */}
      <div className={styles.controls}>
        <div className={styles.button} onClick={() => setPlaying((s) => !s)}>
          {playing ? (
            // prettier-ignore
            <svg fill='currentcolor' viewBox="0 0 18 18"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"></path></svg>
          ) : (
            // prettier-ignore
            <svg fill='currentcolor' viewBox="0 0 18 18"><path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path></svg>
          )}
        </div>
        {isPlaylist(props.url) && (
          <div className={styles.button} onClick={handleSkipTrack}>
            {/* prettier-ignore */}
            <svg fill='currentcolor' width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"> <path d="M1 17L12.3333 9L1 1V17ZM14.3333 1V17H17V1H14.3333Z"/> </svg>
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
        {/* VOLUME */}
        <div className={styles.button} onClick={handleMute}>
          {muted ? (
            // prettier-ignore
            <svg fill='currentcolor' viewBox="0 0 18 18"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></svg>
          ) : (
            // prettier-ignore
            <svg fill='currentcolor' viewBox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></svg>
          )}
        </div>
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

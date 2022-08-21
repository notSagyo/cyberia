import cn from 'classnames';
import React, {
  AnchorHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import styles from '/styles/anchor.module.scss';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  noDecoration?: boolean;
}

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, noDecoration = false, ...props }, ref) => {
    const [hoverAudio, setHoverAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
      setHoverAudio(new Audio('/sound/link-hover.wav'));
    }, []);

    function handleMouseOver(e: React.MouseEvent<HTMLAnchorElement>) {
      if (!hoverAudio) return;
      e.stopPropagation();
      hoverAudio.currentTime = 0;
      hoverAudio.play();
    }

    return (
      <a
        {...props}
        onMouseEnter={handleMouseOver}
        className={cn(styles.anchor, props.className)}
        style={{
          ...(noDecoration && { textDecoration: 'none' }),
        }}
      >
        {children}
      </a>
    );
  }
);

Anchor.displayName = 'AnchorExtended';
export default Anchor;

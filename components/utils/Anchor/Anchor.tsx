import cn from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, useEffect, useState } from 'react';
import styles from './Anchor.module.scss';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  noDecoration?: boolean;
  noSound?: boolean;
}

const Anchor = React.forwardRef(
  (
    { children, noDecoration = false, noSound, href, ...props }: AnchorProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const [hoverAudio, setHoverAudio] = useState<HTMLAudioElement | null>(null);

    function handleMouseOver(e: React.MouseEvent<HTMLAnchorElement>) {
      if (!hoverAudio) return;
      e.stopPropagation();
      hoverAudio.volume = 0.5;
      hoverAudio.currentTime = 0;
      hoverAudio.play();
    }

    useEffect(() => {
      setHoverAudio(new Audio('/sound/link-hover.wav'));
    }, []);

    const anchorElement = (
      <a
        {...props}
        ref={ref}
        onMouseEnter={noSound ? undefined : handleMouseOver}
        className={cn(styles.anchor, props.className)}
        style={{ ...(noDecoration && { textDecoration: 'none' }) }}
      >
        {children}
      </a>
    );

    return (
      <>
        {href ? (
          <Link href={href} passHref>
            {anchorElement}
          </Link>
        ) : (
          <>{anchorElement}</>
        )}
      </>
    );
  }
);

Anchor.displayName = 'Anchor';
export default Anchor;

import cn from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, useEffect, useState } from 'react';
import styles from './Anchor.module.scss';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  noDecoration?: boolean;
  noSound?: boolean;
  noColor?: boolean;
}

const Anchor = React.forwardRef(
  (
    {
      children,
      noDecoration = false,
      noColor = false,
      noSound,
      href,
      ...props
    }: AnchorProps,
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

    const attributes = {
      ...props,
      ref: ref,
      onMouseEnter: noSound ? undefined : handleMouseOver,
      className: cn(
        styles.anchor,
        props.className,
        noDecoration && styles.noDecoration,
        noColor && styles.noColor
      ),
    };

    return (
      <>
        {href ? (
          <Link {...attributes} href={href}>
            {children}
          </Link>
        ) : (
          <a {...attributes}>{children}</a>
        )}
      </>
    );
  }
);

Anchor.displayName = 'Anchor';
export default Anchor;

import cn from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, useEffect, useState } from 'react';
import styles from '/styles/anchor.module.scss';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  noDecoration?: boolean;
  noSound?: boolean;
}

const Anchor = ({
  children,
  noDecoration = false,
  noSound,
  href,
  ...props
}: AnchorProps) => {
  const [hoverAudio, setHoverAudio] = useState<HTMLAudioElement | null>(null);

  function handleMouseOver(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!hoverAudio) return;
    e.stopPropagation();
    hoverAudio.currentTime = 0;
    hoverAudio.play();
  }

  useEffect(() => {
    setHoverAudio(new Audio('/sound/link-hover.wav'));
  }, []);

  const anchorElement = (
    <a
      {...props}
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
        { anchorElement }
      )}
    </>
  );
};

export default Anchor;

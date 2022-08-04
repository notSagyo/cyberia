import { HtmlProps } from 'next/dist/shared/lib/html-context';
import React, {
  AnchorHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react';

const Anchor = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLProps<HTMLAnchorElement>
>(({ children, ...props }, ref) => {
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
    <a {...props} onMouseEnter={handleMouseOver}>
      {children}
    </a>
  );
});

Anchor.displayName = 'AnchorExtended';
export default Anchor;

import _ from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import Shell, { ShellProps } from './Shell';
import { centerDraggableShell } from './ShellHelper';

export interface DraggableShellProps extends ShellProps {
  throttling?: number;
  /** Will only be centered on initial render, dynamically loaded content like
   * images without specified width and height will cause it to offset */
  centered?: boolean;
}

const DraggableShell = ({
  throttling = 15,
  centered,
  ...props
}: DraggableShellProps) => {
  const shellRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const y = useRef(0);
  const prevX = useRef(0);
  const prevY = useRef(0);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setDragImage(new Image(), 0, 0);
    prevX.current = e.clientX;
    prevY.current = e.clientY;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDrag = useCallback(
    _.throttle((e: React.DragEvent) => {
      e.preventDefault();
      const shell = shellRef.current;
      if (!shell) return;
      x.current = prevX.current - e.clientX;
      y.current = prevY.current - e.clientY;
      prevX.current = e.clientX;
      prevY.current = e.clientY;
      if (e.clientX <= 0 || e.clientY <= 0) return;
      shell.style.top = shell.offsetTop - y.current + 'px';
      shell.style.left = shell.offsetLeft - x.current + 'px';
    }, throttling),
    [throttling]
  );

  useEffect(() => {
    if (shellRef.current && centered) centerDraggableShell(shellRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Shell
      {...props}
      shellref={shellRef}
      titleProps={{
        draggable: true,
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragEnd: (e) => e.preventDefault(),
        style: { ...props.style, cursor: 'move' },
      }}
    >
      {props.children}
    </Shell>
  );
};

export default DraggableShell;

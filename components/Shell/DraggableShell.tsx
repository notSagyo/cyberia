import _ from 'lodash';
import { useCallback, useRef } from 'react';
import Shell, { ShellProps } from './Shell';

interface DraggableShellProps extends ShellProps {
  throttling?: number;
}

const DraggableShell = ({ throttling = 15, ...props }: DraggableShellProps) => {
  const x = useRef(0);
  const y = useRef(0);
  const prevX = useRef(0);
  const prevY = useRef(0);
  const shellRef = useRef(null);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setDragImage(new Image(), 0, 0);
    prevX.current = e.clientX;
    prevY.current = e.clientY;
  };

  const handleDrag = useCallback(
    _.throttle((e: React.DragEvent) => {
      e.preventDefault();
      const shell = (e.target as HTMLElement).parentNode as HTMLElement;
      x.current = prevX.current - e.clientX;
      y.current = prevY.current - e.clientY;
      prevX.current = e.clientX;
      prevY.current = e.clientY;
      if (e.clientX <= 0 || e.clientY <= 0) return;
      shell.style.top = shell.offsetTop - y.current + 'px';
      shell.style.left = shell.offsetLeft - x.current + 'px';
    }, throttling),
    []
  );

  return (
    <Shell
      {...props}
      ref={shellRef}
      shellTitleProps={{
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

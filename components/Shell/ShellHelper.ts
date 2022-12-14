import React, { useState } from 'react';

interface UseShellControlsOptions {
  shellref?: React.RefObject<HTMLDivElement>;
  onClose?: (closed: boolean) => void;
  onMaximize?: (maximized: boolean) => void;
  onMinimize?: (minimized: boolean) => void;
}

// "value" is used to force a specific state instead of negation
export const useShellControls = (options?: UseShellControlsOptions) => {
  const [closed, setClosed] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const handleClose = (value?: boolean) => {
    setClosed((prev) => {
      const newClosed = typeof value === 'boolean' ? value : !prev;
      if (options?.onClose) options.onClose(newClosed);
      else options?.shellref?.current?.remove();
      return newClosed;
    });
  };

  const handleMinimize = (value?: boolean) => {
    setMinimized((prev) => {
      const newMinimized = typeof value === 'boolean' ? value : !prev;
      if (options?.onMinimize) options.onMinimize(newMinimized);
      if (newMinimized) handleMaximize(false);
      return newMinimized;
    });
  };

  const handleMaximize = (value?: boolean) => {
    setMaximized((prev) => {
      const newMaximized = typeof value === 'boolean' ? value : !prev;
      if (options?.onMaximize) options.onMaximize(newMaximized);
      if (newMaximized) handleMinimize(false);
      return newMaximized;
    });
  };

  return {
    closed,
    maximized,
    minimized,
    handleClose,
    handleMaximize,
    handleMinimize,
  };
};

export const centerDraggableShell = (shell: HTMLElement) => {
  const clientRect = shell.getBoundingClientRect();
  shell.style.top = `calc(50% - ${clientRect.height / 2}px)`;
  shell.style.left = `calc(50% - ${clientRect.width / 2}px)`;
};

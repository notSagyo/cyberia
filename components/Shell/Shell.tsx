import cn from 'classnames';
import React, { useRef } from 'react';
import styles from './Shell.module.scss';
import ShellBody, { ShellBodyProps } from './ShellBody';
import { useShellControls } from './ShellHelper';
import ShellNav from './ShellNav';
import ShellTitle, { ShellTitleProps } from './ShellTitle';
import { maxShellWidth } from '/utils/styles-exports';

export interface ShellProps extends React.HTMLProps<HTMLDivElement> {
  mainShell?: boolean;
  headerProps?: React.HTMLProps<HTMLDivElement>;
  shellRef?: React.RefObject<HTMLDivElement>;
  // Shell title
  shellTitle?: React.ReactNode;
  titleProps?: ShellTitleProps;
  noHr?: boolean;
  closeable?: boolean;
  maximizeable?: boolean;
  minimizeable?: boolean;
  onClose?: (closed: boolean) => void;
  onMinimize?: (minimized: boolean) => void;
  onMaximize?: (maximized: boolean) => void;
  // Shell nav
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
  // Shell body
  onBodyClickAction?: 'close' | 'maximize' | 'minimize';
  bodyProps?: ShellBodyProps;
  noPadding?: boolean;
}

const Shell = ({
  children,
  shellTitle,
  mainShell = false,
  noHr = false,
  closeable = true,
  maximizeable = false,
  minimizeable = true,
  onClose,
  onMinimize,
  onMaximize,
  navItems,
  navContent,
  onBodyClickAction,
  bodyProps = {},
  titleProps = {},
  noPadding = false,
  ...props
}: ShellProps) => {
  const innerShellRef = useRef<HTMLDivElement>(null);
  const shellRef = props.shellRef ?? innerShellRef;
  const bodyRef = useRef<HTMLDivElement>(null);
  const { maximized, minimized, handleClose, handleMaximize, handleMinimize } =
    useShellControls({ onClose, onMaximize, onMinimize, shellRef });

  const onBodyClick = (() => {
    let action: Function | undefined;
    if (onBodyClickAction === 'close') action = handleClose;
    if (onBodyClickAction === 'maximize') action = handleMaximize;
    if (onBodyClickAction === 'minimize') action = handleMinimize;
    return action;
  })();

  const shellClasses = cn(styles.shell, props.className, {
    // maximize only if there's not a custom function for maximizing
    [styles.maximized]: !onMaximize && maximized,
    [styles.mainShell]: mainShell,
    [styles.noHr]: noHr,
  });

  const shellStyle: React.CSSProperties = {
    ...props.style,
    ...(!onMaximize &&
      maximized && {
        maxWidth: maxShellWidth,
        maxHeight: '100vh',
        overflow: 'auto',
      }),
  };

  return (
    <div {...props} ref={shellRef} className={shellClasses} style={shellStyle}>
      {/* HEADER */}
      <div className={styles.header}>
        <ShellTitle
          mainShell={mainShell}
          noHr={noHr}
          onClose={closeable || onClose ? handleClose : undefined}
          onMaximize={maximizeable || onMaximize ? handleMaximize : undefined}
          onMinimize={minimizeable || onMinimize ? handleMinimize : undefined}
          maximized={maximized}
          shellTitle={shellTitle}
          {...titleProps}
        />
        {(navItems || navContent) && (
          <ShellNav navContent={navContent} navItems={navItems} />
        )}
      </div>

      {/* BODY */}
      <ShellBody
        ref={bodyRef}
        onClick={bodyProps.onClick}
        onBodyClick={onBodyClick}
        onMinimize={onMinimize}
        noPadding={noPadding}
        minimized={minimized}
        {...bodyProps}
      >
        {children}
      </ShellBody>
    </div>
  );
};

export default Shell;

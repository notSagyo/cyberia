import cn from 'classnames';
import { useRef, useState } from 'react';
import ShellNav from './ShellNav';
import ShellTitle from './ShellTitle';
import styles from '/styles/shell.module.scss';

export interface ShellProps extends React.HTMLProps<HTMLDivElement> {
  // Shell title
  shellTitle?: React.ReactNode;
  mainShell?: boolean;
  noHr?: boolean;
  closeable?: boolean;
  maximizeable?: boolean;
  minimizeable?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  // Shell nav
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
  // Shell body
  onBodyClickAction?: 'close' | 'maximize' | 'minimize' | null;
  bodyProps?: React.HTMLProps<HTMLDivElement>;
  noPadding?: boolean;
}

const Shell = ({
  children,
  shellTitle,
  mainShell = false,
  noHr = false,
  closeable = true,
  maximizeable = false,
  minimizeable = false,
  onClose,
  onMinimize,
  onMaximize,
  navItems,
  navContent,
  onBodyClickAction = null,
  bodyProps = {},
  noPadding = false,
  ...props
}: ShellProps) => {
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  if (closeable && !onClose)
    onClose = () => shellRef.current && shellRef.current.remove();
  if (maximizeable && !onMaximize) onMaximize = () => setMaximized(!maximized);
  if (minimizeable && !onMinimize) onMinimize = () => setMinimized(true);

  const onBodyClick = (() => {
    let action: undefined | (() => void) = undefined;
    if (onBodyClickAction === 'close') action = onClose;
    if (onBodyClickAction === 'maximize') action = onMaximize;
    if (onBodyClickAction === 'minimize') action = onMinimize;
    return action;
  })();

  return (
    // SHELL
    <div
      {...props}
      ref={shellRef}
      className={cn(props.className, styles.shell, {
        [styles.maximized]: maximized,
        [styles.mainShell]: mainShell,
        [styles.noHr]: noHr,
      })}
      style={{
        ...props.style,
        ...(maximized && {
          // TODO: remove magic number
          maxWidth: 1240,
          maxHeight: '100vh',
          overflow: 'auto',
        }),
      }}
    >
      {/* TITLE BAR */}
      <ShellTitle
        mainShell={mainShell}
        noHr={noHr}
        onClose={onClose}
        onMaximize={onMaximize}
        onMinimize={onMinimize}
        maximized={maximized}
        shellTitle={shellTitle}
      />

      {/* NAVBAR */}
      {(navItems || navContent) && (
        <ShellNav navContent={navContent} navItems={navItems} />
      )}

      {/* BODY */}
      <div
        {...bodyProps}
        onClick={
          (onBodyClick || bodyProps.onClick) &&
          ((e) =>
            (bodyProps.onClick && bodyProps.onClick(e)) ||
            (onBodyClick && onBodyClick()))
        }
        className={cn(styles.body, bodyProps?.className)}
        style={{ ...(noPadding && { padding: 0 }), ...bodyProps?.style }}
      >
        {children}
      </div>
    </div>
  );
};

export default Shell;

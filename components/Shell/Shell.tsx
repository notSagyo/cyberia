import cn from 'classnames';
import { useRef } from 'react';
import styles from './Shell.module.scss';
import { useShellControls } from './ShellHelper';
import ShellNav from './ShellNav';
import ShellTitle, { ShellTitleProps } from './ShellTitle';

export const maxShellWidth = 1240;

export interface ShellProps extends React.HTMLProps<HTMLDivElement> {
  mainShell?: boolean;
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
  onBodyClickAction?: 'close' | 'maximize' | 'minimize' | null;
  bodyProps?: React.HTMLProps<HTMLDivElement>;
  noPadding?: boolean;
}

// TODO: Move body to new component
// TODO: Move classnames out of return
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
  onBodyClickAction = null,
  bodyProps = {},
  titleProps = {},
  noPadding = false,
  ...props
}: ShellProps) => {
  const shellRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { maximized, minimized, handleClose, handleMaximize, handleMinimize } =
    useShellControls({ onClose, onMaximize, onMinimize, shellRef });

  const onBodyClick: Function | undefined = (() => {
    let action;
    if (onBodyClickAction === 'close') action = handleClose;
    if (onBodyClickAction === 'maximize') action = handleMaximize;
    if (onBodyClickAction === 'minimize') action = handleMinimize;
    return action;
  })();

  return (
    // SHELL
    <div
      {...props}
      ref={shellRef}
      className={cn(styles.shell, props.className, {
        // maximize only if there's not custom function for maximizing
        [styles.maximized]: !onMaximize && maximized,
        [styles.mainShell]: mainShell,
        [styles.noHr]: noHr,
      })}
      style={{
        ...props.style,
        ...(!onMaximize &&
          maximized && {
            maxWidth: maxShellWidth,
            maxHeight: '100vh',
            overflow: 'auto',
          }),
      }}
    >
      {/* TITLE BAR */}
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

      {/* NAVBAR */}
      {(navItems || navContent) && (
        <ShellNav navContent={navContent} navItems={navItems} />
      )}

      {/* BODY */}
      <div
        {...bodyProps}
        ref={bodyRef}
        onClick={
          (onBodyClick || bodyProps.onClick) &&
          ((e) =>
            (bodyProps.onClick && bodyProps.onClick(e)) ||
            (onBodyClick && onBodyClick()))
        }
        // minimize only if there's not custom function for minimizing
        className={cn(styles.body, bodyProps?.className, {
          minimized: !onMinimize && minimized,
        })}
        style={{ ...(noPadding && { padding: 0 }), ...bodyProps?.style }}
      >
        {children}
      </div>
    </div>
  );
};

export default Shell;

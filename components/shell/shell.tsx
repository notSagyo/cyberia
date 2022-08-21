import cn from 'classnames';
import { useState } from 'react';
import ShellNav from './shell-nav';
import ShellTitle from './shell-title';
import styles from '/styles/shell.module.scss';

export interface ShellProps extends React.HTMLProps<HTMLDivElement> {
  // Shell title
  shellTitle?: React.ReactNode;
  mainShell?: boolean;
  noHr?: boolean;
  closeable?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  // Shell nav
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
  // Shell body
  bodyProps?: React.HTMLProps<HTMLDivElement>;
  noPadding?: boolean;
}

const Shell = ({
  children,
  shellTitle,
  navItems,
  navContent,
  bodyProps,
  mainShell,
  noPadding,
  noHr,
  closeable,
  onClose,
  onMinimize,
  onMaximize,
  ...props
}: ShellProps) => {
  const [closed, setClosed] = useState(true);
  if (closeable && !onClose) onClose = () => setClosed(false);

  return (
    // SHELL
    <div
      {...props}
      className={cn(props.className, styles.shell, {
        [styles.mainShell]: mainShell,
        [styles.noHr]: noHr,
      })}
      style={{ ...props.style, ...(!closed && { display: 'none' }) }}
    >
      {/* TITLE BAR */}
      <ShellTitle
        mainShell={mainShell}
        noHr={noHr}
        onClose={onClose}
        onMaximize={onMaximize}
        onMinimize={onMinimize}
        shellTitle={shellTitle}
      />

      {/* HEADER */}
      {(navItems || navContent) && (
        <ShellNav navContent={navContent} navItems={navItems} />
      )}

      {/* BODY */}
      <div
        {...bodyProps}
        className={`${styles.body} ${bodyProps?.className || ''}`}
        style={{ ...(noPadding && { padding: 0 }), ...bodyProps?.style }}
      >
        {children}
      </div>
    </div>
  );
};

export default Shell;

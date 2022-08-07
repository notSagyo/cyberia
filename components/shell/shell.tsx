import cn from 'classnames';
import ShellNav from './shell-nav';
import ShellTitle from './shell-title';
import styles from '/styles/shell.module.scss';

export interface ShellProps extends React.HTMLProps<HTMLDivElement> {
  // Shell title
  shellTitle?: React.ReactNode;
  mainShell?: boolean;
  noHr?: boolean;
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
  onClose,
  onMinimize,
  onMaximize,
  ...props
}: ShellProps) => {
  return (
    // SHELL
    <div
      {...props}
      className={cn(props.className, styles.shell, {
        [styles.mainShell]: mainShell,
        [styles.noHr]: noHr,
      })}
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

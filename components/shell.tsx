import styles from '/styles/shell.module.scss';

export interface ShellProps extends React.HTMLProps<HTMLDivElement> {
  shellTitle?: React.ReactNode;
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
  bodyProps?: React.HTMLProps<HTMLDivElement>;
  mainShell?: boolean;
  noPadding?: boolean;
  noHr?: boolean;
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
  ...props
}: ShellProps) => {
  return (
    <div
      {...props}
      className={
        `${props.className ? props.className : ''}` +
        ` ${styles.shell}` +
        ` ${mainShell ? styles.mainShell : ''}` +
        ` ${noHr ? styles.noHr : ''}`
      }
    >
      {/* TITLE BAR */}
      <div className={styles.title}>
        {mainShell && <div className={styles.hr}></div>}
        {shellTitle}
        {!noHr && <div className={styles.hr}></div>}
        <div className={styles.controls}></div>
      </div>

      {/* HEADER */}
      {(navItems || navContent) && (
        <div className={styles.header}>
          {navItems && <ul>{navItems}</ul>}
          {navContent && <>{navContent}</>}
        </div>
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

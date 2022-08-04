import styles from '/styles/shell.module.scss';

interface ShellProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
  mainShell?: boolean;
  p0?: boolean;
}

const Shell = ({
  children,
  title,
  navItems,
  navContent,
  mainShell,
  p0,
  ...props
}: ShellProps) => {
  return (
    <div
      {...props}
      className={
        `${props.className ? props.className : ''}` +
        ` ${styles.shell}` +
        ` ${mainShell ? styles.mainShell : ''}`
      }
    >
      {/* TITLE BAR */}
      <div className={styles.title}>
        {mainShell && <div className={styles.hr}></div>}
        {title}
        <div className={styles.hr}></div>
        <div className={styles.controls}></div>
      </div>

      {/* HEADER */}
      {(navItems || navContent) && (
        <div className={styles.header}>
          {navItems && <ul>{navItems}</ul>}
          {navContent && <>{navContent}</>}
        </div>
      )}

      {/* CHILDREN */}
      <div className={styles.body} style={{ ...(p0 && { padding: 0 }) }}>
        {children}
      </div>
    </div>
  );
};

export default Shell;

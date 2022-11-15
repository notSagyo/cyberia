import styles from './Shell.module.scss';

interface ShellHeaderProps {
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
}

const ShellNav = ({ navItems, navContent }: ShellHeaderProps) => {
  return (
    <>
      <nav className={styles.header}>
        {navItems && <ul>{navItems}</ul>}
        {navContent && <>{navContent}</>}
      </nav>
    </>
  );
};

export default ShellNav;

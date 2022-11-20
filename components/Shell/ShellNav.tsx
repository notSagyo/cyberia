import styles from './Shell.module.scss';

interface ShellNavProps {
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
}

const ShellNav = ({ navItems, navContent }: ShellNavProps) => {
  return (
    <>
      <nav className={styles.nav}>
        {navItems && <ul>{navItems}</ul>}
        {navContent && <>{navContent}</>}
      </nav>
    </>
  );
};

export default ShellNav;

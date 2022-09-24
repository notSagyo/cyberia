import styles from './Shell.module.scss';

interface ShellHeaderProps {
  navItems?: React.ReactNode;
  navContent?: React.ReactNode;
}

const ShellNav = ({ navItems, navContent }: ShellHeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        {navItems && <ul>{navItems}</ul>}
        {navContent && <>{navContent}</>}
      </div>
    </>
  );
};

export default ShellNav;

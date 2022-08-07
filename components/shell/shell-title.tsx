import styles from '/styles/shell.module.scss';

interface ShellTitleProps {
  shellTitle?: React.ReactNode;
  mainShell?: boolean;
  noHr?: boolean;
  onClose?: () => void;
  onMaximize?: () => void;
  onMinimize?: () => void;
}

const ShellTitle = ({
  shellTitle,
  mainShell,
  noHr,
  onClose,
  onMaximize,
  onMinimize,
}: ShellTitleProps) => {
  return (
    <div className={styles.title}>
      {mainShell && <div className={styles.hr}></div>}
      {shellTitle}
      {!noHr && <div className={styles.hr}></div>}
      <div className={styles.controls}>
        <span onClick={onMinimize} className={onMinimize ? 'pointer' : ''}>
          -
        </span>
        <span onClick={onMaximize} className={onMaximize ? 'pointer' : ''}>
          □
        </span>
        <span onClick={onClose} className={onClose ? 'pointer' : ''}>
          ⨯
        </span>
      </div>
    </div>
  );
};

export default ShellTitle;

import cn from 'classnames';
import styles from './Shell.module.scss';

export interface ShellTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  shellTitle?: React.ReactNode;
  mainShell?: boolean;
  noHr?: boolean;
  // Controls
  onClose?: () => void;
  onMaximize?: () => void;
  onMinimize?: () => void;
  maximized?: boolean;
}

// TODO: add min width to hr
const ShellTitle = ({
  shellTitle,
  mainShell,
  noHr,
  onClose,
  onMaximize,
  onMinimize,
  maximized,
  ...props
}: ShellTitleProps) => {
  return (
    <div {...props} className={cn(styles.title, props?.className)}>
      {mainShell && <div className={styles.hr}></div>}
      <div className={styles.titleText}>{shellTitle}</div>
      {!noHr && <div className={styles.hr}></div>}
      <div className={styles.controls}>
        <span onClick={onMinimize} className={onMinimize ? 'pointer' : ''}>
          -
        </span>
        <span onClick={onMaximize} className={onMaximize ? 'pointer' : ''}>
          {maximized ? <span style={{ fontSize: '1rem' }}>❐</span> : '□'}
        </span>
        <span onClick={onClose} className={onClose ? 'pointer' : ''}>
          ⨯
        </span>
      </div>
    </div>
  );
};

export default ShellTitle;

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
      {/* LEFT HR ON MAIN SHELL */}
      {mainShell && <div className={styles.hr}></div>}
      {/* TITLE TEXT */}
      <div className={styles.titleText}>{shellTitle}</div>
      {/* HR */}
      {!noHr && <div className={styles.hr}></div>}
      {/* CONTROLS */}
      <div className={styles.controls}>
        {/* MINIMIZE */}
        <span onClick={onMinimize} className={cn(onMinimize && 'pointer')}>
          -
        </span>
        {/* MAXIMIZE */}
        <span
          onClick={onMaximize}
          className={cn(onMaximize && 'pointer')}
          style={
            maximized ? { fontSize: '1rem', transform: 'translateY(7.5%)' } : {}
          }
        >
          {maximized ? '❐' : '□'}
        </span>
        {/* CLOSE */}
        <span onClick={onClose} className={cn(onClose && 'pointer')}>
          ⨯
        </span>
      </div>
    </div>
  );
};

export default ShellTitle;

import styles from './CustomPlayerMain.module.scss';
import CustomPlayer, {
  CustomPlayerProps,
} from '/components/CustomPlayer/CustomPlayer';

/** Always import this component with next/dynamic */
const CustomPlayerMain = ({ ...props }: CustomPlayerProps) => {
  return (
    <div className={styles.mainPlayerContainer}>
      <CustomPlayer
        {...props}
        shellProps={{ className: styles.mainPlayerShell }}
      />
    </div>
  );
};

export default CustomPlayerMain;

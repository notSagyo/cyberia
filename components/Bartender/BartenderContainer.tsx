import { HTMLAttributes } from 'react';
import styles from './Bartender.module.scss';

const BartenderContainer = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.container}>
      <div className={styles.bartenderWrapper}>
        <div className={styles.clouds} />
        {children}
      </div>
    </div>
  );
};

export default BartenderContainer;

import React, { HTMLAttributes } from 'react';
import styles from '/styles/bartender.module.scss';

const BartenderGameContainer = ({
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.container}>
      <div className={styles.bartenderWrapper}>
        <div className={styles.clouds} />
        {children}
      </div>
    </div>
  );
};

export default BartenderGameContainer;

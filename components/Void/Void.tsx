import React, { useEffect } from 'react';
import styles from './Void.module.scss';
import { closeShellQuotes } from '../../data/quotes';

interface VoidProps {
  visible: boolean;
}

const Void = ({ visible }: VoidProps) => {
  const [quote, setQuote] = React.useState<string>('');

  useEffect(() => {
    setQuote(
      closeShellQuotes[Math.floor(Math.random() * closeShellQuotes.length)]
    );
  }, [visible]);

  return (
    <div className={visible ? styles.void : 'dNone'}>
      <div className={styles.message}>{quote.toUpperCase()}</div>
    </div>
  );
};

export default Void;

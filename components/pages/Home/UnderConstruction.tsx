import styles from './UnderConstruction.module.scss';

const UnderConstruction = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section {...props}>
      <img
        src="/img/under-construction-line.gif"
        alt="construction"
        height={48}
      />
      <div className={styles.underConstruction}>
        <img src="/img/under-construction.gif" alt="construction" height={48} />
        <h2 className="h4 blink">
          <u>SITE UNDER CONSTRUCTION</u>
        </h2>
        <img src="/img/under-construction.gif" alt="construction" height={48} />
      </div>
      <img
        src="/img/under-construction-line.gif"
        alt="construction"
        height={48}
      />
    </section>
  );
};

export default UnderConstruction;

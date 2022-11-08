import styles from './Hr.module.scss';

interface HrProps {
  variant: 'Blood' | 'Blue' | 'Fire';
}

const Hr = ({ variant }: HrProps) => {
  const classNames = styles['hrImg' + variant];

  return <div className={classNames} />;
};

export default Hr;

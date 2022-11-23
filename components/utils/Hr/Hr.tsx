import cn from 'classnames';
import styles from './Hr.module.scss';

interface HrProps extends React.HTMLProps<HTMLDivElement> {
  variant: 'Blood' | 'Blue' | 'Fire' | 'Balloons';
}

const Hr = ({ variant, ...props }: HrProps) => {
  const classNames = styles['hrImg' + variant];

  return <div {...props} className={cn(classNames, props.className)} />;
};

export default Hr;

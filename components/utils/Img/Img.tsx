import cn from 'classnames';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  mirror?: boolean;
}

/** Just an img wrapped in a div */
const Img = ({ mirror, ...props }: ImgProps) => {
  return (
    <div className={cn(mirror && 'mirror')}>
      <img {...props} />
    </div>
  );
};

export default Img;

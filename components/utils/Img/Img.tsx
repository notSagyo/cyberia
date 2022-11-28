import cn from 'classnames';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  mirror?: boolean;
}

/** Just an img wrapped in a div */
const Img = ({ mirror, alt = '', ...props }: ImgProps) => {
  return (
    <div className={cn(mirror && 'mirror')}>
      <img {...props} alt={alt} />
    </div>
  );
};

export default Img;

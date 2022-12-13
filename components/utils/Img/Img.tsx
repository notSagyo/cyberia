interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  mirror?: boolean;
}

/** Just an img wrapped in a div */
const Img = ({ mirror, alt = '', ...props }: ImgProps) => {
  return (
    <div className={mirror ? 'mirror' : undefined}>
      <img {...props} alt={alt} />
    </div>
  );
};

export default Img;

interface WeirdProps extends React.HTMLAttributes<HTMLElement> {
  /* props */
}

const Weird = ({ ...props }: WeirdProps) => {
  return <div {...props}>Weird</div>;
};

export default Weird;

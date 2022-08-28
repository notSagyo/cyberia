import React, { HTMLAttributes } from 'react';

const LinkList = ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => {
  return <ul {...props}>{children}</ul>;
};

export default LinkList;

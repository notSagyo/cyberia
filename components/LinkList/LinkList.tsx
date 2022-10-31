import { HTMLAttributes } from 'react';
import LinkListItem from './LinkListItem';

export interface Link {
  href: string;
  title?: string;
  key?: string;
}

interface LinkListProps extends HTMLAttributes<HTMLUListElement> {
  links?: Link[];
}

const LinkList = ({ children, links, ...props }: LinkListProps) => {
  return (
    <ul {...props}>
      {links
        ? links.map((link, i) => (
            <LinkListItem href={link.href} key={link.key || i}>
              {link.title || link.href}
            </LinkListItem>
          ))
        : children}
    </ul>
  );
};

export default LinkList;

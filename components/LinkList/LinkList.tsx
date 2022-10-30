import { HTMLAttributes } from 'react';
import LinkListItem from './LinkListItem';

interface LinkListProps extends HTMLAttributes<HTMLUListElement> {
  links?: { href: string; title?: string; key?: string }[];
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

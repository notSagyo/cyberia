import cn from 'classnames';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import Anchor, { AnchorProps } from '../utils/anchor';

interface LinkListProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  anchorProps?: AnchorProps;
  titleProps?: HTMLAttributes<HTMLHeadingElement>;
  goBack?: boolean;
}

// !TODO: Use this component insted of anchor non-lists everywhere!!
const LinkListItem = ({
  href,
  anchorProps,
  titleProps,
  goBack,
  children,
  ...props
}: LinkListProps) => {
  return (
    <li>
      <Link {...props} href={href} passHref>
        <Anchor className={anchorProps?.className}>
          <h2 className={cn('h3', titleProps?.className)}>
            {goBack && '..'}
            {children || href}
          </h2>
        </Anchor>
      </Link>
    </li>
  );
};

export default LinkListItem;
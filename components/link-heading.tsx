import cn from 'classnames';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import Anchor, { AnchorProps } from './utils/anchor';

interface TitleLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  anchorProps?: AnchorProps;
  titleProps?: HTMLAttributes<HTMLHeadingElement>;
  goBack?: boolean;
}

const LinkHeading = ({
  href,
  anchorProps,
  titleProps,
  goBack,
  children,
  ...props
}: TitleLinkProps) => {
  return (
    <Link {...props} href={href} passHref>
      <Anchor className={cn('green', anchorProps?.className)}>
        <h1 className={cn('h2', titleProps?.className)}>
          {goBack && '..'}
          {children || href}
        </h1>
      </Anchor>
    </Link>
  );
};

export default LinkHeading;

import cn from 'classnames';
import { HTMLAttributes } from 'react';
import Anchor, { AnchorProps } from '../utils/Anchor/Anchor';

interface LinkListProps extends AnchorProps {
  href: string;
  titleProps?: HTMLAttributes<HTMLHeadingElement>;
  goBack?: boolean;
}

const LinkListItem = ({
  href,
  titleProps,
  goBack,
  children,
  ...props
}: LinkListProps) => {
  return (
    <li>
      <Anchor {...props} className={props?.className} href={href}>
        <h2 className={cn('h3', titleProps?.className)}>
          {goBack && '..'}
          {children || href}
        </h2>
      </Anchor>
    </li>
  );
};

export default LinkListItem;

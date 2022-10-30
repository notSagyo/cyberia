import cn from 'classnames';
import { HTMLAttributes } from 'react';
import Anchor, { AnchorProps } from '../utils/Anchor/Anchor';

interface TitleLinkProps extends AnchorProps {
  href: string;
  titleProps?: HTMLAttributes<HTMLHeadingElement>;
  goBack?: boolean;
}

const LinkHeading = ({
  href,
  titleProps,
  goBack,
  children,
  ...props
}: TitleLinkProps) => {
  return (
    <Anchor {...props} href={href} className={cn('green', props?.className)}>
      <h1 className={cn('h2', titleProps?.className)}>
        {goBack && '..'}
        {children || href}
      </h1>
    </Anchor>
  );
};

export default LinkHeading;

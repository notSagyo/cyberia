import cn from 'classnames';
import React from 'react';
import styles from './Shell.module.scss';

export interface ShellBodyProps extends React.HTMLProps<HTMLDivElement> {
  onBodyClick?: Function;
  onMinimize?: Function;
  noPadding?: boolean;
  minimized?: boolean;
}

const ShellBody = ({
  onBodyClick,
  onMinimize,
  noPadding,
  minimized,
  ...props
}: ShellBodyProps) => {
  return (
    <div
      {...props}
      onClick={
        (onBodyClick || props.onClick) &&
        ((e) =>
          (props.onClick && props.onClick(e)) || (onBodyClick && onBodyClick()))
      }
      // minimize only if there's not a custom function for minimizing
      className={cn(styles.body, props?.className, {
        minimized: !onMinimize && minimized,
      })}
      style={{ ...(noPadding && { padding: 0 }), ...props?.style }}
    />
  );
};

export default ShellBody;

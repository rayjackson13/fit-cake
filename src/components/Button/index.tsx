import React from 'react';
import clsx from 'clsx';
import * as styles from './Button.module.sass';

type Props = {
  outline?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => unknown;
};

export const Button = (props: Props): JSX.Element => {
  const { outline = false, fullWidth = false, children, onClick = () => {} } = props;
  const rootStyle = clsx(styles.button, outline && styles.outline, fullWidth && styles.fullWidth);

  return (
    <button className={rootStyle} onClick={onClick}>
      {children}
    </button>
  );
};

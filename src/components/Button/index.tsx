import React from 'react';
import clsx from 'clsx';
import * as styles from './Button.module.sass';

type Props = {
  href?: string;
  outline?: boolean;
  fullWidth?: boolean;
  customStyles?: string;
  children: React.ReactNode;
  onClick?: () => unknown;
};

export const Button = (props: Props): JSX.Element => {
  const {
    customStyles,
    href,
    outline = false,
    fullWidth = false,
    children,
    onClick = () => {},
  } = props;
  const rootStyle = clsx(
    styles.button,
    customStyles && customStyles,
    outline && styles.outline,
    fullWidth && styles.fullWidth
  );

  if (href) {
    return (
      <a className={rootStyle} onClick={onClick} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={rootStyle} onClick={onClick}>
      {children}
    </button>
  );
};

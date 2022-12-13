import clsx from 'clsx';
import React from 'react';

import * as styles from './Button.module.sass';

type Props = {
  children: React.ReactNode;
  customStyles?: string;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => unknown;
  outline?: boolean;
};

export const Button = (props: Props): JSX.Element => {
  const {
    customStyles,
    href,
    outline = false,
    fullWidth = false,
    children,
    onClick = (): void => {},
  } = props;
  const rootStyle = clsx(
    styles.button,
    customStyles && customStyles,
    outline && styles.outline,
    fullWidth && styles.fullWidth
  );

  if (href)
    return (
      <a className={rootStyle} href={href} onClick={onClick} rel="noreferrer" target="_blank">
        {children}
      </a>
    );

  return (
    <button className={rootStyle} onClick={onClick} type="button">
      {children}
    </button>
  );
};

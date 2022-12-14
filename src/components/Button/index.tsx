import clsx from 'clsx';
import { Link } from 'gatsby';
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

  if (href) {
    return (
      <Link className={rootStyle} to={href} onClick={onClick} rel="noreferrer" target="_blank">
        {children}
      </Link>
    );
  }

  return (
    <button className={rootStyle} onClick={onClick} type="button">
      {children}
    </button>
  );
};

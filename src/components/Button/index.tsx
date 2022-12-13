import React from 'react';
import * as styles from './Button.module.sass';

type Props = {
  children: React.ReactNode;
  onClick?: () => unknown;
};

export const Button = ({ children, onClick = () => {} }: Props): JSX.Element => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

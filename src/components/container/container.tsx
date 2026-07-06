import type { FC } from 'react';

import type { ContainerProps } from './container.types';
import styles from './container.module.css';

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={[styles.container, className].filter(Boolean).join(' ')}>{children}</div>;
};

export default Container;

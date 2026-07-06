import type { FC } from 'react';

import Container from '@/components/container';

import type { HeaderProps } from './header.types';
import styles from './header.module.css';

export const Header: FC<HeaderProps> = ({ dataTestId }) => {
  return (
    <header className={styles.header} data-testid={dataTestId}>
      <Container>Logo</Container>
    </header>
  );
};

export default Header;

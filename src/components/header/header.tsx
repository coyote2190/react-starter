import type { FC } from 'react';

import Container from '@/components/container';

import { StyledHeader } from './header.styles';
import type { HeaderProps } from './header.types';

export const Header: FC<HeaderProps> = ({ dataTestId }) => {
  return (
    <StyledHeader data-testid={dataTestId}>
      <Container>Logo</Container>
    </StyledHeader>
  );
};

export default Header;

import styled from 'styled-components';

import { Container } from '@/components';

export const StyledHomePage = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    place-items: center;
    gap: 1rem;
  }
`;

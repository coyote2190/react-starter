import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  @media (width >= 640px) {
    max-width: 640px;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (width >= 1024px) {
    max-width: 1024px;
  }

  @media (width >= 1280px) {
    max-width: 1280px;
  }

  @media (width >= 1536px) {
    max-width: 1536px;
  }
`;

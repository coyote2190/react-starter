import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  place-content: center;
  padding-top: 23px;
  padding-bottom: 23px;
  border-bottom: 1px solid grey;

  > div {
    display: flex;
    place-content: space-between;
  }
`;

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledHomePage } from './home.styles';
import type { HomeProps } from './home.types';

const Home: FC<HomeProps> = ({ dataTestId }) => {
  const { t: translate } = useTranslation();

  return (
    <StyledHomePage data-testid={dataTestId}>
      <h1>{translate('pages.home.title')}</h1>
      <p>{translate('pages.home.description')}</p>
    </StyledHomePage>
  );
};

export default Home;

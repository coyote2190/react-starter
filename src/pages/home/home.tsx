import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { HomeProps } from './home.types';
import styles from './home.module.css';

const Home: FC<HomeProps> = ({ dataTestId }) => {
  const { t: translate } = useTranslation();

  return (
    <div className={styles.homePage} data-testid={dataTestId}>
      <h1>{translate('pages.home.title')}</h1>
      <p>{translate('pages.home.description')}</p>
    </div>
  );
};

export default Home;

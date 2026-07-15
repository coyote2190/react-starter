import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { NotFoundProps } from './notFound.types';
import styles from './notFound.module.css';

const NotFound: FC<NotFoundProps> = ({ dataTestId }) => {
  const { t: translate } = useTranslation();

  return (
    <div className={styles.notFoundPage} data-testid={dataTestId}>
      <h1>{translate('error.title')}</h1>
      <p>{translate('error.notFound')}</p>
    </div>
  );
};

export default NotFound;

import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18nForTests';

type WithProvidersProps = {
  children: ReactNode;
};

export const withProviders = ({ children }: WithProvidersProps) => (
  <I18nextProvider i18n={i18n}>
    <>{children}</>
  </I18nextProvider>
);

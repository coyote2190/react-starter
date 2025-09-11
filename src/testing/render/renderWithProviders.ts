import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withProviders } from './withProviders';

const renderWithProviders = (ui: ReactElement, options = {}) => render(ui, { wrapper: withProviders, ...options });

export * from '@testing-library/react';
export { renderWithProviders, userEvent };

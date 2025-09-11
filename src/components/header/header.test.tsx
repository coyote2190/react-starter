import { renderWithProviders } from '@/testing';

import Header from './header';

describe('Header', () => {
  it('renders the component Header', () => {
    const { getByTestId } = renderWithProviders(<Header dataTestId="component-header" />);

    const container = getByTestId('component-header');

    expect(container).toBeInTheDocument();
  });
});

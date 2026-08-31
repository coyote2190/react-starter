import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(document.documentElement).toHaveClass('dark');
  });
});

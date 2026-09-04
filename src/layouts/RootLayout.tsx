import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/users', labelKey: 'nav.users' },
  { to: '/notes', labelKey: 'nav.notes' },
] as const;

export function RootLayout() {
  useTheme();
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center gap-6 px-4">
          <span className="font-semibold tracking-tight">react-starter</span>

          <nav className="flex items-center gap-4 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'transition-colors hover:text-foreground',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-muted-foreground text-sm">
          MIT — coyote2190
        </div>
      </footer>
    </div>
  );
}

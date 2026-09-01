/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { UserCard } from './components/UserCard';
import { useUsers } from './hooks/useUsers';

export const UsersPage = () => {
  const { t } = useTranslation();
  const { data, isPending, isError, refetch } = useUsers();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-bold text-3xl tracking-tight">{t('users.title')}</h1>
        <p className="text-muted-foreground">{t('users.description')}</p>
      </div>

      {isPending && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={`skeleton-${i}`} className="h-36 w-full rounded-xl" />
          ))}
        </div>
      )}

      {isError && (
        <div className="flex flex-col items-start gap-3 rounded-lg border border-destructive/50 p-6">
          <p className="text-sm">{t('users.error')}</p>
          <Button variant="outline" size="sm" onClick={() => void refetch()}>
            {t('users.retry')}
          </Button>
        </div>
      )}

      {data && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </section>
  );
};

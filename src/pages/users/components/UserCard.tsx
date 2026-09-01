import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { User } from '@/services/users';

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-base">{user.name}</CardTitle>
      <p className="text-muted-foreground text-sm">@{user.username}</p>
    </CardHeader>
    <CardContent className="space-y-1 text-sm">
      <p className="truncate">{user.email}</p>
      <p className="text-muted-foreground">{user.company.name}</p>
    </CardContent>
  </Card>
);

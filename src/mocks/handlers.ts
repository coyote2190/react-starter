/* eslint-disable @typescript-eslint/no-explicit-any */
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

const people: Person[] = [
  { age: 29, email: 'alice@example.com', firstName: 'Alice', id: '1', lastName: 'Martin' },
  { age: 34, email: 'bruno@example.com', firstName: 'Bruno', id: '2', lastName: 'Lefevre' },
  { age: 22, email: 'camille@example.com', firstName: 'Camille', id: '3', lastName: 'Duval' },
  { age: 27, email: 'david@example.com', firstName: 'David', id: '4', lastName: 'Bernard' },
  { age: 31, email: 'emma@example.com', firstName: 'Emma', id: '5', lastName: 'Dubois' },
  { age: 25, email: 'francois@example.com', firstName: 'Francois', id: '6', lastName: 'Lambert' },
  { age: 28, email: 'helene@example.com', firstName: 'Helene', id: '7', lastName: 'Moreau' },
  { age: 33, email: 'isabelle@example.com', firstName: 'Isabelle', id: '8', lastName: 'Girard' },
  { age: 24, email: 'julien@example.com', firstName: 'Julien', id: '9', lastName: 'Rousseau' },
  { age: 30, email: 'karim@example.com', firstName: 'Karim', id: '10', lastName: 'Petit' },
  { age: 26, email: 'laura@example.com', firstName: 'Laura', id: '11', lastName: 'Faure' },
  { age: 35, email: 'marie@example.com', firstName: 'Marie', id: '12', lastName: 'Blanc' },
  { age: 23, email: 'nicolas@example.com', firstName: 'Nicolas', id: '13', lastName: 'Henry' },
  { age: 32, email: 'olivier@example.com', firstName: 'Olivier', id: '14', lastName: 'Garnier' },
  { age: 29, email: 'pauline@example.com', firstName: 'Pauline', id: '15', lastName: 'Chevalier' },
  { age: 28, email: 'quentin@example.com', firstName: 'Quentin', id: '16', lastName: 'Barbier' },
  { age: 27, email: 'rachel@example.com', firstName: 'Rachel', id: '17', lastName: 'Perrot' },
  { age: 34, email: 'sebastien@example.com', firstName: 'Sebastien', id: '18', lastName: 'Renard' },
  { age: 25, email: 'thomas@example.com', firstName: 'Thomas', id: '19', lastName: 'Leclerc' },
  { age: 31, email: 'ursula@example.com', firstName: 'Ursula', id: '20', lastName: 'Boucher' },
  { age: 26, email: 'victor@example.com', firstName: 'Victor', id: '21', lastName: 'Marchand' },
  { age: 33, email: 'wendy@example.com', firstName: 'Wendy', id: '22', lastName: 'Guillaume' },
  { age: 24, email: 'xavier@example.com', firstName: 'Xavier', id: '23', lastName: 'Collet' },
  { age: 30, email: 'yasmin@example.com', firstName: 'Yasmin', id: '24', lastName: 'Fontaine' }
];

// fonction utilitaire pour trier
function sortData(data: Person[], sort: string): Person[] {
  if (!sort) return data;
  const sorters = sort.split(',').map((s) => {
    const [id, dir] = s.split(':');
    return { desc: dir === 'desc', id };
  });

  return [...data].sort((a, b) => {
    for (const { desc, id } of sorters) {
      const va = (a as any)[id];
      const vb = (b as any)[id];
      if (va < vb) return desc ? 1 : -1;
      if (va > vb) return desc ? -1 : 1;
    }
    return 0;
  });
}

export const handlers = [
  http.get('/api/people', ({ request }) => {
    const url = new URL(request.url);
    const sort = url.searchParams.get('sort') ?? '';
    const data = sortData(people, sort);
    return HttpResponse.json({ data }, { status: 200 });
  })
];

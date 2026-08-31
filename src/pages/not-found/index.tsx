import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">404</h1>
      <p className="text-muted-foreground">This page does not exist.</p>
      <Link to="/" className="underline">
        Back to home
      </Link>
    </div>
  )
}

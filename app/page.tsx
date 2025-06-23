import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Velkommen til Tracker</h1>
      <Link href="/tage">
        <a className="text-blue-600 hover:underline">Vis domæner</a>
      </Link>
    </div>
  )
}

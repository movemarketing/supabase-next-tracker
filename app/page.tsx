// app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🛰️ Supabase Keyword Tracker</h1>
      <p>Velkommen! Vælg en sektion:</p>
      <ul style={{ lineHeight: '2' }}>
        <li>
          <Link href="/domains">Se domæner</Link>
        </li>
        <li>
          <Link href="/keywords">Se søgeord</Link>
        </li>
      </ul>
    </main>
  );
}

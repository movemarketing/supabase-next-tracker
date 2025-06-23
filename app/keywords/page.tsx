'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import type { Keyword } from '@/types';

export default function KeywordsPage() {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKeywords = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from('keywords').select('*');

      if (error) {
        console.error('Error fetching keywords:', error);
      } else {
        setKeywords(data as Keyword[]);
      }
      setLoading(false);
    };

    fetchKeywords();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>📈 Keywords</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ marginTop: '1rem', width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Keyword</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Created at</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((k) => (
              <tr key={k.id}>
                <td style={{ padding: '0.5rem' }}>{k.keyword}</td>
                <td style={{ padding: '0.5rem' }}>{new Date(k.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

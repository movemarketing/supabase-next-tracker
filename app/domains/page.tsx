// /app/domains/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Domain } from "@/types";

export default function DomainsPage() {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDomains() {
      const { data, error } = await supabase.from("domains").select("*");
      if (error) {
        console.error("Fejl ved hentning af domæner:", error.message);
      } else {
        setDomains(data || []);
      }
      setLoading(false);
    }

    fetchDomains();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dine domæner</h1>
      {loading ? (
        <p>Henter domæner...</p>
      ) : domains.length === 0 ? (
        <p>Ingen domæner fundet.</p>
      ) : (
        <ul className="space-y-2">
          {domains.map((domain) => (
            <li key={domain.id} className="border p-4 rounded shadow">
              <strong>{domain.name}</strong> <br />
              <span className="text-sm text-gray-600">
                Oprettet: {new Date(domain.created_at).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-10 font-sans">
      <h1 className="text-2xl font-semibold">Generador de Flyers — Esteban Firpo</h1>
      <p className="mt-2 opacity-80">Usá los accesos rápidos para ver o descargar.</p>
      <ul className="mt-8 space-y-4 list-disc pl-6">
        <li>
          <Link className="underline" href="/preview">Ir a Preview (descargas)</Link>
        </li>
        <li>
          <Link className="underline" href="/flyers/sem1">Ver sem1 4:5</Link>
        </li>
        <li>
          <Link className="underline" href="/flyers-story/sem1">Ver sem1 9:16</Link>
        </li>
      </ul>
    </main>
  );
}

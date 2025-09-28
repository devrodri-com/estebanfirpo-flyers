// src/app/preview/page.tsx
import data from "@/data/flyers.json";

export default function Preview() {
  const items = data as { id: string; titulo: string }[];
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-2xl font-semibold">Exportaciones de Flyers</h1>
      <p className="text-sm opacity-80">
        Si no ves las imágenes, corré <code className="px-1 py-0.5 bg-black/10 rounded">pnpm gen:flyers</code>.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((f) => (
          <section key={f.id} className="space-y-3">
            <h2 className="text-xl font-medium">{f.id} — {f.titulo}</h2>
            <div className="flex gap-12 items-start">
              <figure>
                <a href={`/exports/${f.id}-4x5.png`} download className="underline">Descargar 4:5</a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/exports/${f.id}-4x5.png`} alt="4:5 preview" className="mt-2 w-60 border rounded bg-neutral-100 object-contain" />
              </figure>
              <figure>
                <a href={`/exports/${f.id}-9x16.png`} download className="underline">Descargar 9:16</a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/exports/${f.id}-9x16.png`} alt="9:16 preview" className="mt-2 w-36 border rounded bg-neutral-100 object-contain" />
              </figure>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
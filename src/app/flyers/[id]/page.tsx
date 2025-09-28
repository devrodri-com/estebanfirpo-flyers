// src/app/flyers/[id]/page.tsx
import Flyer, { type FlyerData } from "@/components/Flyer";
import data from "@/data/flyers.json";

// Next.js 15: params es Promise en Server Components
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const items = data as unknown as FlyerData[];
  const d = items.find((x) => x.id === id);
  if (!d)
    return (
      <div className="w-[1080px] h-[1350px] flex items-center justify-center">Flyer no encontrado</div>
    );
  return <Flyer d={d} />;
}

export const dynamic = "force-static";
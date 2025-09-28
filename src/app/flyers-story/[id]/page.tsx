// src/app/flyers-story/[id]/page.tsx
import FlyerStory from "@/components/FlyerStory";
import { type FlyerData } from "@/components/Flyer";
import data from "@/data/flyers.json";

// Next.js 15 typed routes: `params` es una Promise en Server Components
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const items = data as unknown as FlyerData[];
  const d = items.find((x) => x.id === id);
  if (!d)
    return (
      <div className="w-[1080px] h-[1920px] flex items-center justify-center">Flyer no encontrado</div>
    );
  return <FlyerStory d={d} />;
}

export const dynamic = "force-static";
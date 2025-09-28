// src/components/Flyer.tsx
import React from "react";

export type FlyerData = {
  id: string;
  tema: string;
  titulo: string;
  subtitulo?: string;
  bullets: string[];
  footerUrl: string;
  phone: string;
  bg?: string;
  logoProject?: string; // ruta a logo del proyecto opcional
  kicker?: string;      // cápsula opcional por proyecto
  officeHosting?: boolean;
};

export default function Flyer({ d }: { d: FlyerData }) {
  return (
    <div className="w-[1080px] h-[1350px] relative font-sans text-white">
      {/* Fondo */}
      {d.bg && d.bg !== "solid" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={d.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[#0B1320]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85" />

      {/* Contenido */}
      <div className="relative h-full px-20 py-16 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {d.logoProject && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={d.logoProject}
                alt="logo proyecto"
                className="h-20 object-contain drop-shadow-lg bg-black/25 backdrop-blur-[1px] rounded-md px-3 py-2"
              />
            )}
            <div className="text-2xl font-semibold tracking-wide">
              Esteban Firpo · <span className="text-yellow-400">Miami Life Realty</span>
            </div>
          </div>
          <div className="text-xl flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/WhatsApp.png" alt="WhatsApp" className="h-7 w-7" />
            {d.phone}
          </div>
        </div>

        {/* Título */}
        <div className="mt-16">
          {/* Kicker pill (opcional por proyecto) */}
          {d.kicker && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-[24px] mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              {d.kicker}
            </div>
          )}

          {/* Title with accent bar */}
          <div className="border-l-4 border-yellow-400 pl-6">
            <h1
              className="text-[96px] leading-[1.02] font-extrabold tracking-tight max-w-[920px] whitespace-pre-line"
              style={{ textShadow: '0 3px 10px rgba(0,0,0,.55)' }}
            >
              {d.titulo}
            </h1>
          </div>

          {d.subtitulo && (
            <p
              className="text-[44px] mt-6 text-gray-100 max-w-[920px]"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,.55)' }}
            >
              {d.subtitulo.replace(/\,?\s*y\s*entrega\s*2028/gi, '')}
            </p>
          )}
        </div>

        {/* Bullets */}
        <div className="mt-18 grid gap-8">
          {d.bullets
            .filter((b) => !/entrega/i.test(b))
            .map((b, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-[#0B1320] font-bold">✓</div>
                <p className="text-[36px] leading-tight max-w-[920px]">{b}</p>
              </div>
            ))}
          {d.officeHosting && (
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-[#0B1320] font-bold">✓</div>
              <p className="text-[36px] leading-tight max-w-[920px]">Residencia + oficina con hosting 365 días</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-14">
          <div className="h-[2px] w-full bg-white/35 mb-6" />
          <div className="flex items-baseline gap-3">
            <div className="text-[30px] opacity-90">Más en</div>
            <div className="text-[40px] font-semibold text-yellow-400">{d.footerUrl}</div>
          </div>
          <div className="text-[24px] opacity-80 mt-4">
            *Inventario y proyecciones sujetos a disponibilidad.
          </div>
        </div>
      </div>
    </div>
  );
}
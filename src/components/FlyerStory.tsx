// src/components/FlyerStory.tsx
import React from "react";
import type { FlyerData } from "./Flyer";

export default function FlyerStory({ d }: { d: FlyerData }) {
  return (
    <div className="w-[1080px] h-[1920px] relative font-sans text-white">
      {/* Fondo */}
      {d.bg && d.bg !== "solid" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={d.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[#0B1320]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/90" />

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
        <div className="mt-20">
          {d.kicker && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-[28px] mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              {d.kicker}
            </div>
          )}
          <div className="border-l-4 border-yellow-400 pl-6">
            <h1
              className="text-[112px] leading-[1.02] font-extrabold tracking-tight max-w-[940px] whitespace-pre-line"
              style={{ textShadow: '0 3px 10px rgba(0,0,0,.55)' }}
            >
              {d.titulo}
            </h1>
          </div>
          {d.subtitulo && (
            <p
              className="text-[48px] mt-8 text-gray-100 max-w-[940px]"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,.55)' }}
            >
              {d.subtitulo.replace(/\,?\s*y\s*entrega\s*2028/gi, '')}
            </p>
          )}
        </div>

        {/* Bullets */}
        <div className="mt-16 grid gap-10">
          {d.bullets
            .filter((b) => !/entrega/i.test(b))
            .map((b, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="mt-1 w-11 h-11 rounded-full bg-yellow-400 text-[#0B1320] font-bold flex items-center justify-center">✓</div>
                <p className="text-[44px] leading-tight max-w-[950px]">{b}</p>
              </div>
            ))}
          {d.officeHosting && (
            <div className="flex items-start gap-6">
              <div className="mt-1 w-11 h-11 rounded-full bg-yellow-400 text-[#0B1320] font-bold flex items-center justify-center">✓</div>
              <p className="text-[44px] leading-tight max-w-[950px]">Residencia + oficina con hosting 365 días</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pb-[140px]">
          <div className="h-[2px] w-full bg-white/35 mb-8" />
          <div className="text-[44px] font-semibold">
            {d.footerUrl}
          </div>
          <div className="text-[34px] opacity-90 mt-2">WhatsApp {d.phone}</div>
        </div>
      </div>
    </div>
  );
}
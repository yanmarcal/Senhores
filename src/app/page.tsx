"use client";

import React, { useState } from "react";

/**
 * Ícones universais em SVG de alto contraste com traços espessos (strokeWidth={2.5})
 * para máxima legibilidade por pessoas idosas sem depender de pacotes externos.
 */
function PillIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ContactsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SosIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

interface MainAction {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClasses: string;
  iconBgClasses: string;
}

const MAIN_ACTIONS: MainAction[] = [
  {
    id: "remedios",
    label: "Remédios",
    description: "Ver horários e doses de hoje",
    icon: PillIcon,
    colorClasses:
      "bg-sky-100 border-sky-900 text-slate-950 hover:bg-sky-200 hover:border-slate-950 active:bg-sky-300",
    iconBgClasses: "bg-white border-2 border-sky-900 text-sky-950",
  },
  {
    id: "agenda",
    label: "Agenda",
    description: "Consultas e compromissos",
    icon: CalendarIcon,
    colorClasses:
      "bg-amber-100 border-amber-900 text-slate-950 hover:bg-amber-200 hover:border-slate-950 active:bg-amber-300",
    iconBgClasses: "bg-white border-2 border-amber-900 text-amber-950",
  },
  {
    id: "contactos",
    label: "Contactos",
    description: "Ligar para família e médicos",
    icon: ContactsIcon,
    colorClasses:
      "bg-emerald-100 border-emerald-900 text-slate-950 hover:bg-emerald-200 hover:border-slate-950 active:bg-emerald-300",
    iconBgClasses: "bg-white border-2 border-emerald-900 text-emerald-950",
  },
];

export default function HomePage() {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleActionClick = (label: string) => {
    setFeedbackMessage(`A abrir ${label}...`);
  };

  const handleSosClick = () => {
    setFeedbackMessage("Emergência SOS acionada! A contactar ajuda...");
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-950 flex flex-col justify-between pb-36 sm:pb-40">
      {/* Container Central Mobile-First */}
      <div className="w-full max-w-md md:max-w-4xl mx-auto px-5 pt-8 sm:pt-12 flex-1 flex flex-col">
        {/* 1. Cabeçalho simples com saudação amigável */}
        <header className="mb-8 sm:mb-10 border-b-2 border-slate-300 pb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Olá, Maria
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed">
            O que deseja fazer agora?
          </p>
        </header>

        {/* Região de anúncio acessível (feedback imediato ao clicar) */}
        {feedbackMessage && (
          <div
            role="status"
            aria-live="polite"
            className="mb-6 p-4 rounded-2xl bg-slate-900 text-white text-xl font-bold flex items-center justify-between border-2 border-slate-950 shadow-md"
          >
            <span>{feedbackMessage}</span>
            <button
              type="button"
              onClick={() => setFeedbackMessage(null)}
              className="ml-4 px-4 py-2 rounded-xl bg-white text-slate-950 text-lg font-extrabold hover:bg-stone-200 active:bg-stone-300 active:scale-95 transition-all"
              aria-label="Fechar mensagem"
            >
              Fechar
            </button>
          </div>
        )}

        {/* 2. Grid central com botões de grandes dimensões */}
        <main aria-label="Funções principais" className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {MAIN_ACTIONS.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleActionClick(item.label)}
                  className={`
                    group w-full min-h-[140px] md:min-h-[260px] p-6 sm:p-8
                    rounded-3xl border-[3px]
                    flex flex-row md:flex-col items-center md:justify-center
                    gap-5 md:gap-6 text-left md:text-center
                    shadow-[0_6px_0_0_#0f172a]
                    hover:shadow-[0_8px_0_0_#0f172a] hover:-translate-y-0.5
                    active:translate-y-1.5 active:shadow-[0_1px_0_0_#0f172a] active:scale-[0.98]
                    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-950 focus-visible:ring-offset-4
                    transition-all duration-150 ease-out cursor-pointer select-none
                    ${item.colorClasses}
                  `}
                >
                  {/* Ícone universal grande com moldura de alto contraste */}
                  <div
                    className={`
                      w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl
                      flex items-center justify-center
                      group-hover:scale-105 group-active:scale-95 transition-transform
                      ${item.iconBgClasses}
                    `}
                  >
                    <IconComponent className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>

                  {/* Rótulo claro + descrição com fonte >= 18px */}
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                      {item.label}
                    </span>
                    <span className="mt-1 text-lg sm:text-xl font-semibold text-slate-800 leading-snug">
                      {item.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </main>
      </div>

      {/* 3. Botão de emergência 'SOS' fixo e flutuante na parte inferior */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-gradient-to-t from-stone-50 via-stone-50/95 to-transparent pointer-events-none">
        <div className="max-w-md md:max-w-4xl mx-auto pointer-events-auto">
          <button
            type="button"
            onClick={handleSosClick}
            aria-label="SOS Emergência: Pedir ajuda imediata"
            className="
              w-full min-h-[84px] sm:min-h-[96px] px-6 py-4
              rounded-3xl border-4 border-red-950
              bg-red-700 text-white
              hover:bg-red-800 hover:-translate-y-0.5
              active:bg-red-950 active:translate-y-1.5 active:scale-[0.98]
              shadow-[0_6px_0_0_#450a0a]
              hover:shadow-[0_8px_0_0_#450a0a]
              active:shadow-[0_1px_0_0_#450a0a]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-700 focus-visible:ring-offset-4
              transition-all duration-150 ease-out
              flex items-center justify-center gap-4 cursor-pointer select-none
            "
          >
            <SosIcon className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 text-white" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 text-left sm:text-center">
              <span className="text-3xl sm:text-4xl font-black tracking-wider uppercase">
                SOS
              </span>
              <span className="text-lg sm:text-2xl font-bold text-red-50">
                Pedir Ajuda Agora
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

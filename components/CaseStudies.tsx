'use client';

import { useState } from 'react';

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  outcome: string[];
  tags: string[];
  duration: string;
  highlight: string;
}

interface CaseStudiesProps {
  studies: CaseStudy[];
  accentColor?: string; // Tailwind color key e.g. 'blue', 'purple', 'teal', 'cyan', 'indigo'
  title?: string;
}

export default function CaseStudies({
  studies,
  accentColor = 'blue',
  title = 'Client Case Studies',
}: CaseStudiesProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const accent = {
    border:  `border-${accentColor}-700`,
    hoverBorder: `hover:border-${accentColor}-500`,
    text:    `text-${accentColor}-400`,
    bg:      `bg-${accentColor}-950/40`,
    tag:     `border-${accentColor}-700 text-${accentColor}-300 bg-${accentColor}-950/50`,
    badge:   `bg-${accentColor}-600`,
  };

  const colorMap: Record<string, { border: string; hoverBorder: string; text: string; bg: string; tag: string; badge: string }> = {
    blue:   { border: 'border-blue-700',   hoverBorder: 'hover:border-blue-500',   text: 'text-blue-400',   bg: 'bg-blue-950/40',   tag: 'border-blue-700 text-blue-300 bg-blue-950/50',   badge: 'bg-blue-600' },
    purple: { border: 'border-purple-700', hoverBorder: 'hover:border-purple-500', text: 'text-purple-400', bg: 'bg-purple-950/40', tag: 'border-purple-700 text-purple-300 bg-purple-950/50', badge: 'bg-purple-600' },
    teal:   { border: 'border-teal-700',   hoverBorder: 'hover:border-teal-500',   text: 'text-teal-400',   bg: 'bg-teal-950/40',   tag: 'border-teal-700 text-teal-300 bg-teal-950/50',   badge: 'bg-teal-600' },
    cyan:   { border: 'border-cyan-700',   hoverBorder: 'hover:border-cyan-500',   text: 'text-cyan-400',   bg: 'bg-cyan-950/40',   tag: 'border-cyan-700 text-cyan-300 bg-cyan-950/50',   badge: 'bg-cyan-600' },
    indigo: { border: 'border-indigo-700', hoverBorder: 'hover:border-indigo-500', text: 'text-indigo-400', bg: 'bg-indigo-950/40', tag: 'border-indigo-700 text-indigo-300 bg-indigo-950/50', badge: 'bg-indigo-600' },
  };

  const c = colorMap[accentColor] ?? colorMap.blue;

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Real engagements. Verified results. Senior-led delivery across regulated and high-growth sectors.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study) => {
            const isOpen = expanded === study.id;
            return (
              <div
                key={study.id}
                className={`rounded-2xl border ${c.border} ${c.hoverBorder} transition-all duration-300 bg-black/60 backdrop-blur overflow-hidden`}
              >
                {/* CARD HEADER */}
                <div className="p-7">
                  {/* Sector badge + duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.tag}`}>
                      {study.sector}
                    </span>
                    <span className="text-xs text-gray-500">{study.duration}</span>
                  </div>

                  {/* Client name */}
                  <h3 className="text-lg font-bold text-white mb-1">{study.client}</h3>

                  {/* Headline stat */}
                  <p className={`text-2xl font-extrabold ${c.text} mb-4`}>{study.highlight}</p>

                  {/* Challenge preview */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {study.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded border border-gray-700 text-gray-400">
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded border border-gray-700 text-gray-500">
                        +{study.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Toggle */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : study.id)}
                    className={`mt-6 text-sm font-semibold ${c.text} hover:underline flex items-center gap-1 transition`}
                  >
                    {isOpen ? 'Hide details ↑' : 'Read full case study ↓'}
                  </button>
                </div>

                {/* EXPANDED DETAIL */}
                {isOpen && (
                  <div className={`px-7 pb-7 border-t ${c.border} pt-6`}>
                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">
                        The Challenge
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">
                        Our Approach
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">
                        Outcomes Delivered
                      </h4>
                      <ul className="space-y-2">
                        {study.outcome.map((o, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${c.badge}`} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* All tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-800">
                      {study.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2 py-1 rounded border ${c.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

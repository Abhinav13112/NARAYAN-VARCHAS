import React from 'react';

/**
 * BotanicalDecorations
 * Minimal, delicate botanical illustration along the bottom-left edge.
 * Displays only 2 to 3 minimal leaves with subtle opacity,
 * ensuring clean aesthetics without visual clutter.
 */
export default function BotanicalDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {/* Minimal Botanical Stem with 3 Leaves */}
      <div className="absolute bottom-6 left-0 w-36 sm:w-48 md:w-56 aspect-[3/4] text-[#688554] opacity-25 transition-opacity">
        <svg
          viewBox="0 0 200 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform -translate-x-4"
        >
          {/* Slender curving stem */}
          <path
            d="M 10 250 C 45 200, 60 140, 80 80 C 88 55, 100 35, 115 20"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="text-[#557342]"
          />

          {/* Leaf 1 - Top delicate leaf */}
          <g className="leaf-1">
            <path
              d="M 115 20 C 135 15, 155 22, 165 38 C 158 52, 138 48, 115 20 Z"
              fill="#74945f"
              fillOpacity="0.8"
            />
            <path d="M 115 20 Q 140 30 165 38" stroke="#466035" strokeWidth="0.8" />
          </g>

          {/* Leaf 2 - Mid elegant leaf */}
          <g className="leaf-2">
            <path
              d="M 80 80 C 105 65, 130 75, 135 95 C 122 108, 98 100, 80 80 Z"
              fill="#82a36d"
              fillOpacity="0.75"
            />
            <path d="M 80 80 Q 110 88 135 95" stroke="#466035" strokeWidth="0.8" />
          </g>

          {/* Leaf 3 - Lower subtle leaf */}
          <g className="leaf-3">
            <path
              d="M 55 155 C 30 135, 15 145, 10 165 C 22 178, 45 172, 55 155 Z"
              fill="#6a8a56"
              fillOpacity="0.7"
            />
            <path d="M 55 155 Q 30 155 10 165" stroke="#466035" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

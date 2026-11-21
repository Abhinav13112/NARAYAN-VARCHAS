import React from 'react';

/**
 * BotanicalDecorations
 * Recreates the subtle, elegant botanical leaf and branch illustrations 
 * along the left edge and bottom-left corner as seen in the reference designs.
 * Fully responsive, SVG-based, non-interactive (pointer-events-none).
 */
export default function BotanicalDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      
      {/* 1. Large Bottom-Left Botanical Branch Cluster (Primary element from reference screenshots) */}
      <div className="absolute -bottom-10 -left-12 sm:-bottom-8 sm:-left-8 md:bottom-0 md:left-0 w-64 sm:w-80 md:w-96 lg:w-[420px] aspect-square text-[#688554] opacity-35 sm:opacity-40 lg:opacity-45 transition-opacity">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform origin-bottom-left"
        >
          {/* Main Arcing Stem */}
          <path
            d="M -10 410 C 40 370, 70 290, 85 220 C 95 170, 115 110, 160 60 C 180 35, 210 20, 240 10"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="text-[#557342]"
          />

          {/* Secondary Stem Offshoot */}
          <path
            d="M 80 230 C 120 210, 180 200, 230 185 C 265 175, 290 160, 310 140"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-[#557342]"
          />

          {/* Tertiary Lower Stem Offshoot */}
          <path
            d="M 50 320 C 100 300, 160 305, 210 290 C 240 280, 270 260, 290 235"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-[#557342]"
          />

          {/* Leaves Cluster along Main Stem */}
          
          {/* Top Tip Leaves */}
          <g className="leaf-group">
            <path
              d="M 240 10 C 265 5, 295 12, 305 30 C 300 48, 270 45, 240 10 Z"
              fill="#74945f"
              fillOpacity="0.85"
            />
            <path d="M 240 10 Q 275 22 305 30" stroke="#466035" strokeWidth="1" />
            
            <path
              d="M 215 28 C 245 22, 275 35, 280 55 C 265 68, 235 55, 215 28 Z"
              fill="#82a36d"
              fillOpacity="0.75"
            />
          </g>

          {/* Upper Leaves */}
          <g className="leaf-group">
            <path
              d="M 160 60 C 185 30, 220 35, 230 55 C 220 80, 185 85, 160 60 Z"
              fill="#6a8a56"
              fillOpacity="0.8"
            />
            <path d="M 160 60 Q 195 58 230 55" stroke="#466035" strokeWidth="1" />

            <path
              d="M 140 90 C 105 75, 80 50, 75 30 C 95 30, 125 55, 140 90 Z"
              fill="#7c9d67"
              fillOpacity="0.75"
            />
            <path d="M 140 90 Q 105 58 75 30" stroke="#466035" strokeWidth="1" />
          </g>

          {/* Mid Leaves */}
          <g className="leaf-group">
            <path
              d="M 115 130 C 150 110, 190 120, 205 140 C 185 165, 145 160, 115 130 Z"
              fill="#638250"
              fillOpacity="0.85"
            />
            <path d="M 115 130 Q 160 135 205 140" stroke="#466035" strokeWidth="1.2" />

            <path
              d="M 95 170 C 60 150, 30 130, 20 105 C 40 105, 75 130, 95 170 Z"
              fill="#739360"
              fillOpacity="0.8"
            />
            <path d="M 95 170 Q 55 135 20 105" stroke="#466035" strokeWidth="1.2" />
          </g>

          {/* Offshoot 1 Leaves (Rightward spreading) */}
          <g className="leaf-group">
            <path
              d="M 310 140 C 335 130, 365 140, 375 158 C 360 175, 330 168, 310 140 Z"
              fill="#7ea069"
              fillOpacity="0.8"
            />
            <path d="M 310 140 Q 345 150 375 158" stroke="#466035" strokeWidth="1" />

            <path
              d="M 270 170 C 295 150, 330 155, 340 175 C 325 195, 290 195, 270 170 Z"
              fill="#6a8a56"
              fillOpacity="0.8"
            />
            <path d="M 270 170 Q 305 172 340 175" stroke="#466035" strokeWidth="1" />

            <path
              d="M 215 190 C 230 160, 255 150, 275 160 C 270 185, 245 205, 215 190 Z"
              fill="#82a36d"
              fillOpacity="0.75"
            />
            <path d="M 215 190 Q 245 172 275 160" stroke="#466035" strokeWidth="1" />
          </g>

          {/* Offshoot 2 Leaves (Lower) */}
          <g className="leaf-group">
            <path
              d="M 290 235 C 315 225, 345 235, 355 255 C 335 270, 305 260, 290 235 Z"
              fill="#70915c"
              fillOpacity="0.85"
            />
            <path
              d="M 240 280 C 270 260, 305 268, 315 290 C 295 310, 260 305, 240 280 Z"
              fill="#60804d"
              fillOpacity="0.85"
            />
            <path d="M 240 280 Q 278 285 315 290" stroke="#466035" strokeWidth="1.2" />

            <path
              d="M 175 300 C 190 270, 215 260, 235 270 C 230 295, 205 315, 175 300 Z"
              fill="#7c9d67"
              fillOpacity="0.8"
            />
          </g>

          {/* Base Lower Foliage Leaves */}
          <g className="leaf-group">
            <path
              d="M 50 320 C 35 285, 25 240, 35 210 C 60 225, 65 275, 50 320 Z"
              fill="#688755"
              fillOpacity="0.8"
            />
            <path d="M 50 320 Q 38 265 35 210" stroke="#466035" strokeWidth="1.2" />

            <path
              d="M 25 360 C 15 320, 0 280, -10 260 C 10 265, 30 305, 25 360 Z"
              fill="#769862"
              fillOpacity="0.75"
            />
            
            <path
              d="M 90 275 C 120 250, 155 255, 170 275 C 155 300, 120 300, 90 275 Z"
              fill="#6a8a56"
              fillOpacity="0.85"
            />
            <path d="M 90 275 Q 130 275 170 275" stroke="#466035" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* 2. Middle-Left Edge Foliage Accent (Subtle leaves along left edge as shown in reference) */}
      <div className="hidden sm:block absolute top-1/3 -left-8 md:-left-6 w-32 md:w-44 aspect-[3/4] text-[#6e8b5a] opacity-30 md:opacity-35">
        <svg
          viewBox="0 0 160 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Stem entering from the left border */}
          <path
            d="M -10 110 C 20 100, 50 80, 80 50 C 95 35, 115 15, 130 0"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-[#557342]"
          />
          <path
            d="M 45 85 C 75 80, 110 80, 135 65"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="text-[#557342]"
          />

          {/* Leaves */}
          <path
            d="M 130 0 C 150 5, 165 20, 160 38 C 145 45, 125 30, 130 0 Z"
            fill="#7ca068"
            fillOpacity="0.8"
          />
          <path
            d="M 80 50 C 110 35, 135 45, 140 65 C 125 80, 95 75, 80 50 Z"
            fill="#6d8e59"
            fillOpacity="0.85"
          />
          <path
            d="M 135 65 C 155 60, 175 72, 170 90 C 150 98, 130 85, 135 65 Z"
            fill="#80a46d"
            fillOpacity="0.75"
          />
          <path
            d="M 50 85 C 35 60, 20 40, 10 30 C 25 35, 45 55, 50 85 Z"
            fill="#658652"
            fillOpacity="0.75"
          />
          <path
            d="M 90 95 C 115 90, 135 102, 135 120 C 115 130, 95 120, 90 95 Z"
            fill="#72945d"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      {/* 3. Upper Right Corner Foliage Accent (Seen in Reference Story & Contact designs) */}
      <div className="hidden lg:block absolute top-20 -right-8 w-48 aspect-[3/4] text-[#6e8b5a] opacity-25">
        <svg
          viewBox="0 0 160 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform scale-x-[-1]"
        >
          <path
            d="M -10 110 C 25 100, 60 75, 90 40 C 105 25, 120 10, 135 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-[#557342]"
          />
          <path
            d="M 135 0 C 155 5, 168 22, 160 40 C 145 45, 125 30, 135 0 Z"
            fill="#7ca068"
            fillOpacity="0.75"
          />
          <path
            d="M 90 40 C 120 28, 142 38, 145 58 C 130 72, 105 65, 90 40 Z"
            fill="#6d8e59"
            fillOpacity="0.8"
          />
          <path
            d="M 55 75 C 80 65, 105 75, 110 92 C 95 105, 75 100, 55 75 Z"
            fill="#80a46d"
            fillOpacity="0.75"
          />
        </svg>
      </div>

    </div>
  );
}

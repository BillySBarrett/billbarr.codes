import type { FC } from 'react';

export const Grid: FC = () => {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full stroke-brand-8 dark:stroke-darkbrand-8 [mask-image:radial-gradient(60%_15%_at_top_left,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width={75}
          height={75}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      />
    </svg>
  );
};

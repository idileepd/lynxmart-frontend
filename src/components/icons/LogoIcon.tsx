import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const LogoIcon: FC<SVGProps> = ({
  width = '800px',
  height = '800px',
  fill = '#000000',
  cursor,
}) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill={fill}
    //   viewBox="0 0 24 24"
    //   strokeWidth={1.5}
    //   stroke="currentColor"
    //   className="w-6 h-6"
    //   width={width}
    //   height={height}
    //   cursor={cursor}
    // >
    //   <path
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     d="M15.75 19.5L8.25 12l7.5-7.5"
    //   />
    // </svg>

    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      cursor={cursor}
    >
      <defs>
        {/* <style>.a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style> */}
      </defs>
      <circle
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="24"
        cy="24"
        r="21.5"
      />
      <circle
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="24"
        cy="24"
        r="6"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M29.9994,24.0869H45.5"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30.1372,11.4169a14,14,0,0,1,4.4607,3.4352"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M34.7246,32.999a14.0006,14.0006,0,0,1-4.5874,3.5841"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.3751,12.2586A14,14,0,0,1,25.22,10.0533"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.0069,24.44A14,14,0,0,1,12.49,16.03"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.6441,36.4741a14,14,0,0,1-6.4338-6.78"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23.7769,35.6972v9.8016"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M34.7246,32.999l6.5479,3.8037"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.21,29.6943,4.94,33.9482"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.49,16.03,6.0956,12.097"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M25.22,10.0533l.08-7.5139"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M34.5979,14.8521l6.4589-3.9408"
      />
    </svg>
  );
};

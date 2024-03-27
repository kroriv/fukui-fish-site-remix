import { ComponentProps } from "react";

export default function Arrow({ ...props }: ComponentProps<"svg">) {
  return (
    <svg { ...props }
      xmlns={ "http://www.w3.org/2000/svg" }
      viewBox={ "0 0 66.21 13.35" }
    >
      <g>
        <polyline 
          className={ "fill-none [stroke-miterlimit:10]" } 
          points={ "0 12.85 65 12.85 52.5 .35" }
        />
      </g>
    </svg>
  );
}
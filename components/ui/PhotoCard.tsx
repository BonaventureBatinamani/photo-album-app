import * as React from "react";

export type PhotoCardProps = {
  className?: string;
  rotation?: number;
  children?: React.ReactNode;
};

export function PhotoCard({ className = "", rotation = 0, children }: PhotoCardProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative bg-warm-white text-ink shadow-[0_10px_30px_rgba(0,0,0,0.45)] border-[10px] border-warm-white border-b-[36px] ${className}`}
      style={{
        borderRadius: "2px",
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className="w-full aspect-[4/5] bg-gradient-to-br from-[#b99a6d] via-[#8f7350] to-[#6f5840]"
        style={{ borderRadius: "2px" }}
      />
      {children}
    </div>
  );
}

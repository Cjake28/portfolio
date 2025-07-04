// src/components/TiltCard.tsx
import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard= ({ children, className }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // store the current rotation angles:
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // how “strong” the tilt effect is (higher = more exaggerated)
  const maxTiltAngle = 40; // degrees

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // calculate mouse position relative to center of card (range: -0.5 .. +0.5)
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const percentX = (offsetX / cardWidth) - 0.5;  // -0.5..+0.5
    const percentY = (offsetY / cardHeight) - 0.5; // -0.5..+0.5

    // convert to rotation angles (invert Y so moving up tilts “back”)
    const  rotateY = percentY * maxTiltAngle; // mouse right → rotateY negative → tilt right
    let rotateX = percentX * maxTiltAngle;      // mouse down → rotateX positive → tilt forward

    if(rotateY <= 0){
      rotateX = rotateX * -1
    }

    setTilt({ rotateX, rotateY });
    console.log(`Tilt angles: rotateX=${rotateX}, rotateY=${rotateY}`);
  };

  const handleMouseLeave = () => {
    // smoothly return to flat
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative 
        rounded-xl 
        overflow-hidden
        transition-transform duration-300 ease-out
        ${className ?? ""}
      `}
      style={{
        // 1) give the whole card perspective
        perspective: "1000px",
        // 2) apply the dynamic rotation
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
    >
      {/* 
        Inside here, you can place any content—
        it will “sit” on the tilted surface.
      */}

        {children}

    </div>
  );
};

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  width: number;
  height: number;
  alt: string;
  sleepSeconds?: number;
  fadeSeconds?: number;
}

export default function ImageCarousel({
  images,
  width,
  height,
  alt,
  sleepSeconds = 3,
  fadeSeconds = 2,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);
  const intervalRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % images.length;
      });
    }, (sleepSeconds + fadeSeconds) * 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, sleepSeconds, fadeSeconds]);

  return (
    <div style={{ width, height, position: "relative" }}>
      {/* Previous image stays fully visible as background during fade */}
      {prev >= 0 && (
        <Image
          src={images[prev]}
          alt=""
          role="presentation"
          width={width}
          height={height}
          unoptimized
          className="absolute bottom-11 right-5"
          style={{ zIndex: 1 }}
        />
      )}
      {/* Current image fades in on top, key forces remount to restart animation */}
      <Image
        key={current}
        src={images[current]}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className="absolute bottom-11 right-5"
        style={{
          zIndex: 2,
          animation: prev >= 0 ? `fadeIn ${fadeSeconds}s ease-in-out` : undefined,
        }}
      />
    </div>
  );
}

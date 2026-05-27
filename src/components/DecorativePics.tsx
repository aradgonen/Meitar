"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const upperPics = [1, 2, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23, 25, 26];
const lowerPics = [1, 4, 5, 6, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 23];

export default function DecorativePics() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const upperIdx = useMemo(
    () => (mounted ? Math.floor(Math.random() * upperPics.length) : 0),
    [mounted]
  );
  const lowerIdx = useMemo(
    () => (mounted ? Math.floor(Math.random() * lowerPics.length) : 0),
    [mounted]
  );

  return (
    <div className="float-right" suppressHydrationWarning>
      <Image
        src={`/images/upper/upper-pic${upperPics[upperIdx]}.png`}
        alt=""
        role="presentation"
        width={231}
        height={177}
        unoptimized
      />
      <Image
        src={`/images/lower/lower-pic${lowerPics[lowerIdx]}.png`}
        alt=""
        role="presentation"
        width={231}
        height={177}
        unoptimized
      />
    </div>
  );
}

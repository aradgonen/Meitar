"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="flex-1 bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/backgrounds/innerPageBkg.jpg')",
        minHeight: 730,
      }}
    >
      <div className="text-center" dir="rtl">
        <h1 className="text-[30px] text-[#006a3e] mb-4">שגיאה</h1>
        <p className="text-lg mb-6">אירעה שגיאה בטעינת הדף</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#006a3e] text-white px-6 py-3 rounded hover:bg-[#005530] transition-colors"
          >
            נסו שנית
          </button>
          <Link
            href="/"
            className="inline-block border border-[#006a3e] text-[#006a3e] px-6 py-3 rounded hover:bg-[#006a3e] hover:text-white transition-colors"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - הדף לא נמצא | מ.י.ת.ר",
};

export default function NotFound() {
  return (
    <div
      className="flex-1 bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/backgrounds/innerPageBkg.jpg')",
        minHeight: 730,
      }}
    >
      <div className="text-center" dir="rtl">
        <h1 className="text-[40px] text-[#006a3e] mb-4">404</h1>
        <p className="text-xl mb-6">הדף המבוקש לא נמצא</p>
        <Link
          href="/"
          className="inline-block bg-[#006a3e] text-white px-6 py-3 rounded hover:bg-[#005530] transition-colors"
          style={{ color: "white" }}
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}

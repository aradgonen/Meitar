import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "משרות פנויות במכון מ.י.ת.ר",
  description: "דרושים למכון מ.י.ת.ר",
};

export default function CareersPage() {
  return (
    <PageLayout title="דרושים">
      <p className="font-bold mb-2">
        ניתן לשלוח קורות חיים ותעודות במייל או בפקס כפי שמופיעים בעמוד{" "}
        <Link href="/contact" className="text-[#505050] hover:underline">צור קשר</Link>{" "}
        באתר.
      </p>
      <h2 className="text-[#006a3e] mt-3 mb-2 font-bold">דרוש/ה קלינאי/ת תקשורת</h2>
      <p className="mb-2">
        ליומיים בשבוע בשעות אחר-הצהריים לעבודה בתחום התפתחות הילד בעלת ניסיון של שנתיים ורישיון של משרד הבריאות.
      </p>
      <h2 className="text-[#006a3e] mt-3 mb-2 font-bold">דרוש/ה מרפא/ה בעיסוק</h2>
      <p className="mb-2">
        ליומיים בשבוע בשעות אחר-הצהריים לעבודה בתחום התפתחות הילד בעלת ניסיון של שנתיים ורישיון של משרד הבריאות.
      </p>
    </PageLayout>
  );
}

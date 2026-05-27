import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "חדשות מ.י.ת.ר",
  description: "עידכונים וחדשות של מ.י.ת.ר - המכון הישראלי לתראפיות",
};

export default function NewsPage() {
  return (
    <PageLayout title="חדשות מיתר">
      <p className="mb-2">בקרוב...</p>
    </PageLayout>
  );
}

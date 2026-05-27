import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר עם מ.י.ת.ר",
  description: "כל דרכי ההתקשרות עם מ.י.ת.ר",
};

export default function ContactPage() {
  return (
    <PageLayout title="צור קשר">
      <h2 className="text-[#006a3e] mt-3 mb-2 font-bold">
        מ.י.ת.ר - המכון הישרלי לתראפיות
      </h2>
      <ul className="list-disc mr-5 mb-3">
        <li className="mb-1">סניף קרית ביאליק: שדרות בן גוריון 63 קומה 6</li>
      </ul>
      <p className="mb-1">טלפון: 04-8727627</p>
      <p className="mb-1">פקס: 1534-6010520</p>
      <p className="mb-3">
        דוא&quot;ל:{" "}
        <a
          href="mailto:m.meitar@gmail.com"
          className="text-[#006a3e] hover:underline"
        >
          m.meitar@gmail.com
        </a>
      </p>
      <ContactForm />
    </PageLayout>
  );
}

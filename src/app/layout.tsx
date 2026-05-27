import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "מ.י.ת.ר - המכון הישראלי לתראפיות",
  description:
    "מ.י.ת.ר - המכון הישראלי לתראפיות - מכון רב תחומי ליעוץ וטיפול במבוגרים, מתבגרים וילדים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "LocalBusiness"],
              name: "מ.י.ת.ר - המכון הישראלי לתראפיות",
              alternateName:
                "M.E.I.T.A.R - The Israeli Institute for Therapies",
              description:
                "מכון רב תחומי ליעוץ וטיפול במבוגרים, מתבגרים וילדים",
              url: "https://www.meitar-tipul.co.il",
              telephone: "04-8727627",
              email: "m.meitar@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "שדרות בן גוריון 63 קומה 6",
                addressLocality: "קריית ביאליק",
                addressCountry: "IL",
              },
              medicalSpecialty: ["Psychiatric", "Psychology"],
              availableService: [
                {
                  "@type": "MedicalTherapy",
                  name: "אבחון פסיכולוגי",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "פסיכותראפיה",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "טיפול בהבעה ויצירה",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "טיפול משפחתי",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "טיפול קבוצתי",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "ריפוי בעיסוק",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "קלינאות תקשורת",
                },
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "גבי גרזי",
                  jobTitle: "מנהלת מקצועית",
                },
                {
                  "@type": "Person",
                  name: "ביאטריס גונן",
                  jobTitle: "מנהלת מקצועית",
                },
              ],
            }),
          }}
        />
        <div className="max-w-[947px] mx-auto flex flex-row-reverse">
          <Sidebar />
          <main className="flex-1 flex flex-col min-h-[730px]">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

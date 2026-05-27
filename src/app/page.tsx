import TopMenu from "@/components/TopMenu";
import ImageCarousel from "@/components/ImageCarousel";
import type { Metadata } from "next";

const upperPics = [1, 2, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23, 25, 26].map(
  (n) => `/images/upper/upper-pic${n}.png`
);
const lowerPics = [1, 4, 5, 6, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 23].map(
  (n) => `/images/lower/lower-pic${n}.png`
);

export const metadata: Metadata = {
  title: "מ.י.ת.ר - המכון הישראלי לתראפיות",
  description:
    "מ.י.ת.ר - המכון הישראלי לתראפיות - מכון רב תחומי ליעוץ וטיפול במבוגרים, מתבגרים וילדים",
};

export default function HomePage() {
  return (
    <div
      className="flex-1 bg-no-repeat"
      style={{
        backgroundImage: "url('/images/backgrounds/homePageBkg.jpg')",
        height: 730,
      }}
    >
      <TopMenu />
      <div style={{ height: 30, margin: "30px 50px 0 0" }}>&nbsp;</div>
      <div
        className="flex flex-row-reverse"
        style={{ margin: "40px 50px 0 15px" }}
      >
        <article
          dir="rtl"
          className="text-justify"
          style={{ width: 340, flexShrink: 0 }}
        >
          <h1 className="text-[22px] text-[#006a3e] mb-[5px]">
            מ.י.ת.ר{" "}
            <span className="text-[18px]">המכון הישראלי לתראפיות</span>
          </h1>
          <p className="font-bold mb-[5px]">
            לחץ? התלבטות? בלבול? דכאון? בדידות? חרדה? זעם?
          </p>
          <p className="font-bold mb-[5px]">
            מי לא חווה רגשות לא-פשוטים אלה בחיים האישיים או בהקשר של יחסים
            זוגיים משפחתיים, חברתיים או תעסוקתיים?...
          </p>
          <p className="mb-[5px]">
            החיים המודרניים מצבים בפני כולנו, ילדים ומבוגרים כאחד, דרישות,
            דילמות וקונפליקטים העלולים, לא אחת, להביא את האדם ו/או המשפחה למצבי
            לחץ, תסכול וחוסר-אונים בבואם להתמודד עם המורכבות של סיטואציות
            קיומיות יום-יומית. במהלך החיים, רובנו מתנסים בצמתים התפתחותיים
            המצריכים עצירה, התבוננות ייעוץ ולווי על-מנת להתגבר על מכשול קושי או
            משבר, לאתר את הכרות האנושים הטמונים בנו ולהמשיך בחיינו מחוזקים
            ומודעים יותר.
          </p>
        </article>
        <div style={{ width: 231, flexShrink: 0 }}>
          <ImageCarousel
            images={upperPics}
            width={231}
            height={177}
            alt="מ.י.ת.ר"
            sleepSeconds={3}
            fadeSeconds={2}
          />
          <ImageCarousel
            images={lowerPics}
            width={231}
            height={177}
            alt="מ.י.ת.ר"
            sleepSeconds={3}
            fadeSeconds={2}
          />
        </div>
      </div>
    </div>
  );
}

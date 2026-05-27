import Link from "next/link";
import Image from "next/image";

const navItems = [
  { id: "home", label: "דף הבית", href: "/", style: { width: 93, height: 100, left: 153, top: 24 } },
  { id: "psychlogic", label: "אבחון פסיכולוגי לילדים", href: "/diagnostics", style: { width: 108, height: 107, left: 37, top: 54 } },
  { id: "consultation", label: "טיפול ויעוץ למבוגרים וילדים", href: "/treatments", style: { width: 104, height: 90, left: 153, top: 144 } },
  { id: "contact", label: "צור קשר", href: "/contact", style: { width: 97, height: 104, left: 48, top: 171 } },
];

export default function Sidebar() {
  return (
    <aside
      className="w-[267px] shrink-0 bg-no-repeat"
      style={{
        backgroundImage: "url('/images/backgrounds/right-col.jpg')",
        height: 730,
      }}
    >
      <Link href="/" className="block" style={{ margin: "9px 12px" }}>
        <Image
          src="/images/meitar-logo.jpg"
          alt="מ.י.ת.ר - המכון הישראלי לתראפיות"
          width={241}
          height={195}
          priority
        />
      </Link>
      <nav className="relative" style={{ height: 300 }}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="absolute block overflow-hidden"
            style={{
              width: item.style.width,
              height: item.style.height,
              left: item.style.left,
              top: item.style.top,
              textIndent: -9999,
            }}
            aria-label={item.label}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { id: "news", label: "חדשות מיתר", href: "/news", left: 0, width: 127, bgX: 0 },
  { id: "dictionary", label: "מילון מונחים", href: "/glossary", left: 114, width: 127, bgX: -127 },
  { id: "diagnostics", label: "איבחונים", href: "/diagnostics", left: 240, width: 113, bgX: -254 },
  { id: "treatments", label: "תחומי טיפול", href: "/treatments", left: 354, width: 116, bgX: -367 },
  { id: "about", label: "אודות", href: "/about", left: 466, width: 126, bgX: -483 },
];

export default function TopMenu() {
  const pathname = usePathname();

  return (
    <nav
      className="relative"
      style={{ width: 592, height: 217, marginLeft: 55 }}
    >
      {menuItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.id}
            href={item.href}
            className="absolute block bg-no-repeat overflow-hidden"
            style={{
              left: item.left,
              width: item.width,
              height: 217,
              top: 0,
              backgroundImage: "url('/images/menu/mainMenu.png')",
              backgroundPosition: `${item.bgX}px ${isActive ? -217 : 0}px`,
              textIndent: -9999,
            }}
            aria-label={item.label}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = `${item.bgX}px -217px`;
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundPosition = `${item.bgX}px 0px`;
              }
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

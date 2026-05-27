import Link from "next/link";

interface SubMenuProps {
  items?: Array<{ label: string; href: string }>;
}

export default function SubMenu({ items }: SubMenuProps) {
  if (!items || items.length === 0) {
    return <div className="h-[30px]" style={{ margin: "30px 50px 0 0" }}>&nbsp;</div>;
  }

  return (
    <div
      className="h-[30px] text-[#006a3e]"
      dir="rtl"
      style={{ margin: "30px 50px 0 0" }}
    >
      <ul className="flex flex-wrap">
        {items.map((item, index) => (
          <li
            key={item.href}
            className="inline-block"
            style={{
              paddingRight: index > 0 ? 10 : 0,
              marginRight: index > 0 ? 10 : 0,
              borderRight: index > 0 ? "1px solid #006a3e" : "none",
            }}
          >
            <Link
              href={item.href}
              className="text-[#006a3e] hover:underline text-sm"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

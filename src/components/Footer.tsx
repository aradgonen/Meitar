import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      dir="rtl"
      style={{ marginLeft: 42, marginTop: 10, width: 623 }}
    >
      <div className="flex">
        <span
          className="text-sm"
          style={{
            flex: 1,
            backgroundColor: "#97c34b",
            padding: 5,
            color: "white",
          }}
        >
          © כל הזכויות שמורות למ.י.ת.ר 2026, טלפון: 04-8727627
        </span>
        <span
          className="text-center"
          style={{
            width: 100,
            backgroundColor: "#006132",
            padding: "5px 0",
          }}
        >
          <Link href="/careers" style={{ color: "white" }} className="hover:underline text-sm">
            דרושים
          </Link>
        </span>
      </div>
    </footer>
  );
}

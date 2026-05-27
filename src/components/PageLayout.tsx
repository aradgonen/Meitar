import TopMenu from "@/components/TopMenu";
import SubMenu from "@/components/SubMenu";
import DecorativePics from "@/components/DecorativePics";

interface PageLayoutProps {
  title: string;
  subMenuItems?: Array<{ label: string; href: string }>;
  children: React.ReactNode;
}

export default function PageLayout({
  title,
  subMenuItems,
  children,
}: PageLayoutProps) {
  return (
    <div
      className="flex-1 bg-no-repeat"
      style={{
        backgroundImage: "url('/images/backgrounds/innerPageBkg.jpg')",
        minHeight: 730,
      }}
    >
      <TopMenu />
      <SubMenu items={subMenuItems} />
      <div
        className="float-right"
        dir="rtl"
        style={{ width: 340, minHeight: 381, margin: "40px 50px 0 15px" }}
      >
        <h1 className="text-[22px] text-[#006a3e] mb-[5px]">{title}</h1>
        {children}
      </div>
      <DecorativePics />
      <div className="clear-both" />
    </div>
  );
}

import Link from "next/link";

interface TicketTabsProps {
  tabs: string[];
  currentTab: string;
}

function TicketTabs({ tabs, currentTab }: TicketTabsProps) {
  return (
    <div className="flex gap-1 border border-gray-400 p-1 rounded-sm">
      {tabs.map((tab) => {
        const isCurrentTab = currentTab === tab;
        return (
          <Link
            href={`/tickets?tab=${tab}`}
            key={tab}
            className={`capitalize text-sm py-1 px-3 rounded-sm ${
              isCurrentTab ? "bg-[#D9D9D9] font-medium" : "hover:bg-gray-200"
            }`}
          >
            {tab}
          </Link>
        );
      })}
    </div>
  );
}

export default TicketTabs;

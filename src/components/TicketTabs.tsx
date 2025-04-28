import { TabsData } from "@/app/(main)/tickets/page";
import Link from "next/link";

interface TicketTabsProps {
  currentTab: string;
  tabsData: TabsData;
  ticketCount: number;
}

function TicketTabs({ currentTab, tabsData, ticketCount }: TicketTabsProps) {
  const tabTitle = tabsData[currentTab as keyof TabsData];
  const tabs = Object.keys(tabsData);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{tabTitle}</span>
        <Link
          href="/new-ticket"
          className="bg-[#e93330] w-full max-w-[200px] text-center text-white text-sm p-2 font-medium rounded-sm hover:opacity-80"
        >
          Create Ticket
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <span>{ticketCount.toLocaleString("en-IN")} issues</span>
        <div className="flex gap-1 border border-gray-400 p-1 rounded-sm">
          {tabs.map((tab) => {
            const isCurrentTab = currentTab === tab;
            return (
              <Link
                href={`/tickets?tab=${tab}`}
                key={tab}
                className={`capitalize text-sm py-1 px-3 rounded-sm ${
                  isCurrentTab
                    ? "bg-[#D9D9D9] font-medium"
                    : "hover:bg-gray-200"
                }`}
              >
                {tab}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TicketTabs;

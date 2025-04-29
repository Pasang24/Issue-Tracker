import { TabsData } from "@/app/(main)/tickets/page";
import Link from "next/link";
import TicketTabs from "./TicketTabs";

interface TicketTabsWrapperProps {
  currentTab: string;
  tabsData: TabsData;
  ticketCount: number;
}

function TicketTabsWrapper({
  currentTab,
  tabsData,
  ticketCount,
}: TicketTabsWrapperProps) {
  const tabTitle = tabsData[currentTab as keyof TabsData];
  const tabs = Object.keys(tabsData);

  const countValue = ticketCount ? ticketCount.toLocaleString("en-IN") : "No";

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{tabTitle}</span>
        <Link
          href="/tickets/create-ticket"
          className="bg-[#e93330] w-full max-w-[200px] text-center text-white text-sm p-2 font-medium rounded-sm hover:opacity-80"
        >
          Create Ticket
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <span>{countValue} issues</span>
        <TicketTabs currentTab={currentTab} tabs={tabs} />
      </div>
    </div>
  );
}

export default TicketTabsWrapper;

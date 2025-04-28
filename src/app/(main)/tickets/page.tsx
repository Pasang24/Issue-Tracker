import TicketList from "@/components/TicketList";
import TicketTabs from "@/components/TicketTabs";
import React from "react";

type SearchParams = { tab: string };

export interface TabsData {
  newest: string;
  active: string;
  extended: string;
}

const tabsData: TabsData = {
  newest: "Newest Issues",
  active: "Active Issues",
  extended: "Extended Issues",
};

async function TicketsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  let { tab = "Newest" } = await searchParams;

  const validTab = Object.keys(tabsData).includes(tab.toLowerCase())
    ? tab.toLowerCase()
    : "newest";

  return (
    <div>
      <TicketTabs currentTab={validTab} tabsData={tabsData} />
      <TicketList currentTab={validTab} />
    </div>
  );
}

export default TicketsPage;

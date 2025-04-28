import TicketList from "@/components/TicketList";
import TicketTabsWrapper from "@/components/TicketTabsWrapper";
import { Ticket } from "@/types/Ticket";
import internalFetch from "@/utils/customFetch";

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

  const response = await internalFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ticket/get-all-tickets?tab=${validTab}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
    }
  );

  const { total, tickets }: { total: number; tickets: Ticket[] } =
    await response.json();

  return (
    <div>
      <TicketTabsWrapper
        currentTab={validTab}
        tabsData={tabsData}
        ticketCount={total}
      />
      <TicketList tickets={tickets} />
    </div>
  );
}

export default TicketsPage;

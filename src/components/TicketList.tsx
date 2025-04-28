import internalFetch from "@/utils/customFetch";
import { Ticket } from "@/types/Ticket";

interface TicketListProps {
  currentTab: string;
}

async function TicketList({ currentTab }: TicketListProps) {
  const response = await internalFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ticket/get-all-tickets`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
    }
  );

  const { tickets }: { tickets: Ticket[] } = await response.json();

  console.log(tickets);

  return (
    <div>
      {tickets.map((ticket) => {
        return <div key={ticket.id}>{ticket.title}</div>;
      })}
    </div>
  );
}

export default TicketList;

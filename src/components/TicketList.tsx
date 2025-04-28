import internalFetch from "@/utils/customFetch";
import { Ticket } from "@/types/Ticket";
import TicketCard from "./TicketCard";

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
    <div className="flex flex-col gap-2 my-4">
      {tickets.map((ticket) => (
        <TicketCard ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
}

export default TicketList;

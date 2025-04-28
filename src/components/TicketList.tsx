import { Ticket } from "@/types/Ticket";
import TicketCard from "./TicketCard";

interface TicketListProps {
  tickets: Ticket[];
}

async function TicketList({ tickets }: TicketListProps) {
  return (
    <div className="flex flex-col gap-2 my-4">
      {tickets.map((ticket) => (
        <TicketCard ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
}

export default TicketList;

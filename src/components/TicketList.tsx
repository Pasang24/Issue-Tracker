import { Ticket } from "@/types/Ticket";
import TicketCard from "./TicketCard";
import NoTicket from "@/illustrations/NoTicket";

interface TicketListProps {
  tickets: Ticket[];
}

async function TicketList({ tickets }: TicketListProps) {
  if (tickets.length)
    return (
      <div className="flex flex-col gap-2 my-4">
        {tickets.map((ticket) => (
          <TicketCard ticket={ticket} key={ticket.id} />
        ))}
      </div>
    );

  return (
    <div className="max-w-[400px] mx-auto my-4">
      <NoTicket />
      <p className="text-center">
        Hooray! It seems we don&apos;t have any issue here.
      </p>
    </div>
  );
}

export default TicketList;

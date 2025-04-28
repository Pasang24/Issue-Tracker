import { Ticket } from "@/types/Ticket";
import Link from "next/link";

interface TicketCardProps {
  ticket: Ticket;
}

function TicketCard({ ticket }: TicketCardProps) {
  const createdDate = new Date(ticket.created_at).toLocaleDateString("en-IN", {
    dateStyle: "full",
  });
  return (
    <div className="flex items-center gap-4 p-3 border-t border-[#CCCCCC]">
      {/* <div className="flex flex-col gap-2 whitespace-nowrap text-xs">
        <span>Reported by: {ticket.reporter_id}</span>
        <span>Assigned to: {ticket.assignee_id}</span>
      </div> */}
      <div className="w-full">
        <Link
          href={`/tickets/${ticket.id}`}
          className="font-medium text-[#e93330] hover:opacity-70"
        >
          {ticket.title}
        </Link>
        <p className="text-sm text-gray-600 my-2">{ticket.description}</p>
        <div className="flex gap-4 justify-end text-xs text-gray-500">
          <span>Status: {ticket.status}</span>
          <span>Reported: {createdDate}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;

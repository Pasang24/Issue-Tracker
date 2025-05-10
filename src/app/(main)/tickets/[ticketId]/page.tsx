import { fetchTicket } from "@/app/actions";
import React from "react";

interface Params {
  ticketId: string;
}

async function TicketDetailsPage({ params }: { params: Promise<Params> }) {
  const { ticketId } = await params;

  const ticket = await fetchTicket(ticketId);

  const createdAt = new Date(ticket.created_at).toLocaleDateString("en-IN", {
    dateStyle: "full",
  });
  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
      <span>Status: {ticket.status}</span>
      <span>Created At: {createdAt}</span>
    </div>
  );
}

export default TicketDetailsPage;

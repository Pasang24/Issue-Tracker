"use server";

import { User } from "@/types/User";
import { Ticket } from "@/types/Ticket";
import internalFetch from "@/utils/customFetch";

export async function fetchProfile() {
  const respose = await internalFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    {
      method: "GET",
    }
  );

  const { user }: { user: User | undefined } = await respose.json();

  return user ? user : null;
}

export async function createTicket(title: string, description: string) {
  const respose = await internalFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ticket/generate-ticket`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title,
        description,
        assignee_id: 2,
      }),
    }
  );
  const { ticket }: { ticket: Ticket } = await respose.json();
  return ticket;
}

export async function fetchTicket(ticketId: string) {
  const response = await internalFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ticket/find-ticket/${ticketId}`,
    {
      method: "GET",
    }
  );

  const { ticket }: { ticket: Ticket } = await response.json();

  return ticket;
}

"use server";
import internalFetch from "@/utils/customFetch";
import { Ticket } from "@/types/Ticket";

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

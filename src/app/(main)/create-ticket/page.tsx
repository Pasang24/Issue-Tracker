import TicketForm from "@/components/TicketForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Ticket",
};

function CreateTicketPage() {
  return (
    <>
      <TicketForm />
    </>
  );
}

export default CreateTicketPage;

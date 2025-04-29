"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TicketForm from "@/components/TicketForm";
import { Button } from "@headlessui/react";

function InterceptedCreateTicketPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[rgba(102,102,102,0.5)] flex w-screen items-center justify-center p-4">
      <div className="flex flex-col -space-y-4 bg-white p-4 w-[90%] max-w-[600px] max-h-[calc(100vh-100px)] border border-gray-200 rounded-lg overflow-auto shadow-2xl">
        <Button onClick={handleClose} className="self-end">
          X
        </Button>
        <TicketForm />
      </div>
    </div>
  );
}

export default InterceptedCreateTicketPage;

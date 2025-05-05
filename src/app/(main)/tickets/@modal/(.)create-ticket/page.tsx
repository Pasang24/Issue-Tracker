"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import TicketForm from "@/components/TicketForm";
import { Dialog, Button } from "@headlessui/react";

function InterceptedCreateTicketPage() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleClose = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (pathname === "/tickets/create-ticket") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [pathname]);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-[rgba(102,102,102,0.5)] flex w-screen items-center justify-center p-4">
        <div className="flex flex-col -space-y-4 bg-white p-4 w-[90%] max-w-[600px] max-h-[calc(100vh-100px)] border border-gray-200 rounded-lg overflow-auto shadow-2xl">
          <Button onClick={handleClose} className="self-end">
            X
          </Button>
          <TicketForm />
        </div>
      </div>
    </Dialog>
  );
}

export default InterceptedCreateTicketPage;

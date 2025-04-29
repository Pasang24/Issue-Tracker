"use client";

import {
  Button,
  Field,
  Fieldset,
  Input,
  Textarea,
  Label,
  Legend,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      router.replace("/tickets");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset
        disabled={loading}
        className="flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto mt-6 rounded-md"
      >
        <Legend className="font-semibold text-xl text-center">
          Create new Ticket
        </Legend>
        <Field className="flex flex-col gap-1">
          <Label className="text-sm">Add a title</Label>
          <Input
            type="text"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
            className="border border-gray-300 p-2 rounded-sm data-disabled:text-gray-400"
          />
        </Field>
        <Field className="flex flex-col gap-1">
          <Label className="text-sm">Add a description</Label>
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Start writing..."
            className="border border-gray-300 min-h-[300px] p-2 rounded-sm data-disabled:text-gray-400"
          />
        </Field>
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            onClick={handleCancel}
            className="bg-[#4D5CDD] text-white text-sm font-medium rounded-sm p-2 data-disabled:opacity-70"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#B5EA5F] text-white text-sm font-medium rounded-sm p-2 data-disabled:opacity-70"
          >
            {loading ? "Creting..." : "Create"}
          </Button>
        </div>
      </Fieldset>
    </form>
  );
}

export default TicketForm;

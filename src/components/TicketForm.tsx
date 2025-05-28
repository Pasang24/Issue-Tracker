"use client";

import { createTicket } from "@/app/actions";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Textarea,
  Label,
  Legend,
  Select,
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import UserSelect from "./UserSelect";

function TicketForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("rides");
  const [pending, startTransition] = useTransition();

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      startTransition(async () => {
        await createTicket(title, description);
      });
      router.replace("/tickets");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <Fieldset
        disabled={pending}
        className="flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto mt-6 rounded-md"
      >
        <Legend className="font-semibold text-xl text-center">
          Create new Ticket
        </Legend>
        <Field className="flex flex-col gap-1">
          <Label className="text-sm">Add a title</Label>
          <Input
            type="text"
            name="title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
            className="border border-gray-300 p-2 rounded-sm data-disabled:text-gray-400"
          />
        </Field>
        <Field className="flex flex-col gap-1">
          <Label className="text-sm">Select a category</Label>
          <Select
            name="category"
            aria-label="Ticket Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border border-gray-300 p-2 rounded-sm"
          >
            <option value="rides">Rides</option>
            <option value="food">Food</option>
            <option value="route">Route</option>
          </Select>
        </Field>
        <Field className="flex items-center gap-2">
          <Label className="text-sm whitespace-nowrap">Assign to: </Label>
          <UserSelect />
        </Field>
        <Field className="flex flex-col gap-1">
          <Label className="text-sm text-nowrap">Add a description</Label>
          <Textarea
            name="description"
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
            {pending ? "Creting..." : "Create"}
          </Button>
        </div>
      </Fieldset>
    </form>
  );
}

export default TicketForm;

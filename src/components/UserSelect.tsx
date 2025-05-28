import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const people: User[] = [
  { id: 1, name: "Tom Cook", email: "example@gmail.com" },
  { id: 2, name: "Wade Cooper", email: "example@gmail.com" },
  { id: 3, name: "Tanya Fox", email: "example@gmail.com" },
  { id: 4, name: "Arlene Mccoy", email: "example@gmail.com" },
  { id: 5, name: "Devon Webb", email: "example@gmail.com" },
];

export default function UserSelect() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selected}
      onChange={(value) => setSelected(value as User)}
      onClose={() => setQuery("")}
      __demoMode
    >
      <div className="relative w-full">
        <ComboboxInput
          className={clsx(
            "w-full rounded-sm border border-gray-300 bg-white/5 py-1.5 pr-8 pl-3 text-sm/6",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
          )}
          displayValue={(person) => person?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="group absolute inset-y-0 right-2 px-2.5">
          <ChevronDownIcon className="size-4" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-(--input-width) rounded-sm border border-gray-300 bg-white p-1 [--anchor-gap:--spacing(1)] empty:invisible",
          "transition duration-100 ease-in data-leave:data-closed:opacity-0"
        )}
      >
        {filteredPeople.map((person) => (
          <ComboboxOption
            key={person.id}
            value={person}
            className="group flex cursor-pointer items-center gap-1 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
            <div className="w-full p-2 rounded-sm text-sm/6 hover:bg-gray-200">
              {person.name}
            </div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}

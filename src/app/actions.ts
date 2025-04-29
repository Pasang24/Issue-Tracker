"use server";

import { User } from "@/types/User";
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

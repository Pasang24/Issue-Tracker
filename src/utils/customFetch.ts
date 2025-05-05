import { cookies } from "next/headers";

const internalFetch = async (url: string, options: RequestInit) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  return await fetch(url, {
    ...options,
    headers: {
      "Cookie": `token=${token}`,
      ...options.headers,
    },
  });
};

export default internalFetch;

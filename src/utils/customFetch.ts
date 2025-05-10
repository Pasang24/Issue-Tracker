import { cookies } from "next/headers";

const internalFetch = async (url: string, options: RequestInit) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  const headers = token
    ? { "Cookie": `token=${token}`, ...options.headers }
    : { ...options.headers };

  return await fetch(url, {
    ...options,
    headers,
  });
};

export default internalFetch;

import { headers } from "next/headers";

const internalFetch = async (url: string, options: RequestInit) => {
  const incomingHeaders = await headers();
  const incomingHeadersObj: Record<string, string> = {};

  incomingHeaders.forEach((value, key) => {
    incomingHeadersObj[key] = value;
  });

  return await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      ...incomingHeadersObj,
    },
  });
};

export default internalFetch;

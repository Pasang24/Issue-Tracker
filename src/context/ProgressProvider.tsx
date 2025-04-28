"use client";

import { ProgressProvider as Provider } from "@bprogress/next/app";

function ProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      height="4px"
      color="#e93330"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </Provider>
  );
}

export default ProgressProvider;

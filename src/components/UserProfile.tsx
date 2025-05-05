"use client";

import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";

function UserProfile() {
  const { user, loading } = useContext(UserContext);

  return (
    <div className="flex items-center gap-2">
      {loading ? (
        <>
          <div className="grid place-content-center bg-gray-300 text-white font-medium w-8 h-8 rounded-full animate-pulse" />
          <span className="bg-gray-300 w-[120px] h-[20px] rounded-sm animate-pulse" />
        </>
      ) : (
        <>
          <div className="grid place-content-center bg-green-800 text-white font-medium w-8 h-8 rounded-full">
            {user?.name[0]}
          </div>
          <span className="text-xs text-gray-800 font-medium whitespace-nowrap">
            {user?.name}
          </span>
        </>
      )}
    </div>
  );
}

export default UserProfile;

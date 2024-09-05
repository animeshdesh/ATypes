"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();

  return (
    <div className="flex justify-between">
      <div>My Blogs</div>
      <div>
        {session.data?.user ? (
          <button className="m-2 p-2 bg-red-300" onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className="m-2 p-2 bg-blue-300" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

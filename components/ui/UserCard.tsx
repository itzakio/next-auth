"use client";
import { useSession } from "next-auth/react";
import React from "react";

const UserCard = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <h1 className="text-xl font-semibold">User: Client </h1>
      <p className="p-4 border-2 border-white">{JSON.stringify(session)}</p>
    </div>
  );
};

export default UserCard;

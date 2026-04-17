import UserCard from "@/components/ui/UserCard";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <UserCard />
      <div>
        <h1 className="text-xl font-semibold">User: Server </h1>
        <p className="p-4 border-2 border-white">{JSON.stringify(session)}</p>
      </div>
    </div>
  );
};

export default Home;

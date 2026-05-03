"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const ProfileClient = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="container mx-auto shadow my-10">
      <Card className="flex flex-col items-center py-10 gap-3">
        <Avatar className="w-20 h-20">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-semibold">{user?.name || "No Name"}</h2>

        <p className="text-gray-500">{user?.email || "No Email"}</p>

        <Chip className="bg-[#b6e8d7] text-[#1d9e75] text-xs">
          Verified Member
        </Chip>

        <Link href="/update-Info" className="w-full mt-5 block">
          <Button className="w-full h-10 bg-[#1d9e75]">
            <FaEdit /> Update Information
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProfileClient;
"use client";

import { FaPowerOff } from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function SignoutBtn() {
  return (
    <button onClick={() => signOut({ redirectTo: "/login" })}>
      <FaPowerOff />
    </button>
  );
}

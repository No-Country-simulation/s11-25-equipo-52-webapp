"use client";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

export default function GoogleBtn() {
  return (
    <button type="button" onClick={() => signIn("google")} className="flex items-center justify-center gap-2 border-2">
      <FcGoogle fontSize="30px" />
      Google
    </button>
  );
}

"use client"; // in next js , this is used to indicate that the file should be treated as a client component for frontend rendering
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function loginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="bg-gray-800 rounded m-3 p-4 text-3xl flex items-center justify-center">
        login page
      </h1>
      <br />

      <label htmlFor="email">email</label>
      <input
        className="border bg-gray-700 border-gray-300 p-2 rounded"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter email"
      />
      <label htmlFor="password">password</label>
      <input
        className="border bg-gray-700 border-gray-300 p-2 rounded"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter password"
      />
      <button>Login</button>
      <br />
      <Link href="/signup">visit signup page</Link>
      <Link href="/">Go to Home</Link>
    </div>
  );
}

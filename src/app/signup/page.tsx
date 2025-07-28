"use client"; // in next js , this is used to indicate that the file should be treated as a client component for frontend rendering
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function signupPage() {
  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const onSignUp = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="bg-gray-800 rounded m-3 p-4 text-3xl flex items-center justify-center">
        signup page
      </h1>
      <br />
      <label htmlFor="username">usename</label>
      <input
        className="border bg-gray-700 border-gray-300 p-2 rounded"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter username"
      />
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
      <button>Signup</button>
      <br />
      <Link href="/login">visit login page</Link>
      <Link href="/">Go to Home</Link>
    </div>
  );
}

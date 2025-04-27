"use client";

import { useState } from "react";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import Link from "next/link";
import { User } from "@/types/User";
// import { redirect } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Login Failed");
      }

      const userData: User = await response.json();

      console.log(userData);
      //   redirect("/tickets");
    } catch (error) {
      console.log(`Login error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Fieldset
        disabled={loading}
        className="flex flex-col gap-2 w-[90%] max-w-[500px] mx-auto mt-6 rounded-md"
      >
        <Legend className="font-semibold text-2xl text-center">
          Welcome Back
        </Legend>
        <Field className="flex flex-col gap-1">
          <Label className="text-sm">Enter your Email</Label>
          <Input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="example@gmail.com"
            className="border border-[#DFD9D9] p-2 rounded-sm data-disabled:text-gray-400"
          />
        </Field>
        <Field className="flex flex-col gap-1">
          <Label className="text-sm">Enter your Password</Label>
          <Input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
            className="border border-[#DFD9D9] p-2 rounded-sm data-disabled:text-gray-400"
          />
        </Field>
        <Button
          type="submit"
          className="bg-[#B5EA5F] text-white font-semibold rounded-sm p-2 mt-2 data-disabled:opacity-70"
        >
          {loading ? "Logging In..." : "Login"}
        </Button>
        <Link
          href="/forgot-password"
          className="text-center text-sm hover:underline"
        >
          Forgot Password?
        </Link>
        <span className="text-center text-[#B4ABAB]">OR</span>
        <Link
          href="/signup"
          className="bg-[#4D5CDD] text-center text-white font-semibold rounded-sm p-2"
        >
          Create New Account
        </Link>
      </Fieldset>
    </form>
  );
}

export default LoginForm;

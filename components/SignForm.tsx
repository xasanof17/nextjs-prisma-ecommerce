"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

type User = {
  name: string;
  email: string;
  password: string;
};

const SignForm = (props: Props) => {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handeFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    console.log(data);
    router.push("/signin");
    return;
    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log("Error", err.message))
      .finally(() => {
        router.replace("/signin");
      });
  };

  const isButtonDisabled =
    user.name === "" ||
    user.name.length < 3 ||
    user.email === "" ||
    user.password === "" ||
    user.password.length < 8;

  const base = {
    label: "block text-sm font-medium text-gray-900",
    input:
      "bg-gray-50 mt-2 text-base placeholder:font-normal font-medium mb-3 w-full border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
  };
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-2">
      <form className="flex w-full max-w-sm flex-col rounded-lg p-10 shadow-lg">
        <h1 className="mb-6 text-xl font-medium">Sign Up</h1>
        <label htmlFor="name" className={base.label}>
          Name
        </label>
        <input
          type="text"
          className={base.input}
          id="name"
          placeholder="Name"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name:
                e.target.value.charAt(0).toUpperCase() +
                e.target.value.slice(1),
            })
          }
          required
          minLength={3}
        />
        <label htmlFor="email" className={base.label}>
          Email
        </label>
        <input
          type="email"
          className={base.input}
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <label htmlFor="password" className={base.label}>
          Password
        </label>
        <input
          type="password"
          className={base.input}
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          minLength={8}
          min={8}
        />
        <button
          onClick={handeFormSubmit}
          type="submit"
          disabled={isButtonDisabled}
          className="mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-purple-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Register now
        </button>
        <Link
          href="signin"
          className="mt-5 inline text-center text-sm text-neutral-600"
        >
          Already have an Account?
        </Link>
        <Link
          href="/"
          className="mt-2 text-center text-base font-normal text-blue-500"
        >
          Home
        </Link>
      </form>
    </section>
  );
};

export default SignForm;

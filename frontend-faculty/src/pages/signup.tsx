import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { axiosClient } from "@/axiosClient";
import { FacultyUserAuthContext } from "@/hooks/contexts/FacultyUserAuthContextProvider";
import { FacultyUserAuthContextType } from "@/types/FacultyUserAuthContextTypes";
import { useRouter } from "next/router";
import { storeFacultyUserJWTToken } from "../../utils/localStorage";

export default function Signup() {
  let router = useRouter();
  const { isAuthenticated, facultyUserAuthRegister } = useContext(
    FacultyUserAuthContext
  ) as FacultyUserAuthContextType;
  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);
  const handleSubmit = async (): Promise<void> => {
    await axiosClient
      .post("v1/faculty/facultyUserRegistration", {
        accountHolderFullName: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password,
      })
      .then((res) => {
        const { accountHolderFullName, email, jwtToken, user_id } = res.data;
        storeFacultyUserJWTToken(jwtToken);
        facultyUserAuthRegister({
          accountHolderFullName: {
            firstName: accountHolderFullName.firstName,
            lastName: accountHolderFullName.lastName,
          },
          email: email,
          user_id: user_id,
        });
        axiosClient.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>Faculty Signup | EduConnect</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="mx-80">
          <div className="">
            <h1 className="text-3xl font-bold text-custom_primary">
              Faculty sign up
            </h1>

            <div className="flex items-center">
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full rounded-md border-custom_secondary-500 border-2 shadow-sm mt-4"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full rounded-md border-custom_secondary-500 border-2 shadow-sm mt-4 ml-4"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="">
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-full rounded-md border-custom_secondary-500 border-2 shadow-sm mt-4"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full rounded-md border-custom_secondary-500 border-2 shadow-sm mt-4"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={() => router.push("/login")}
              className="mt-4 mr-4 inline-block rounded border border-custom_secondary-500 font-medium px-12 py-4 text-white bg-custom_secondary-400"
            >
              Login
            </button>
            <button
              onClick={handleSubmit}
              className="mt-4 inline-block rounded border border-custom_secondary-500 font-medium px-12 py-4 text-white bg-custom_secondary-500"
            >
              Register
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

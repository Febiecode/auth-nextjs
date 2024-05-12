"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios  from 'axios'
import {toast} from 'react-hot-toast';

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success",response.data);
      router.push("login")
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading? "Processing..." : "Sign Up"}</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input
          id='username'
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder='Username' className="text-black"
        />

        <label htmlFor="email">Email</label>
        <input
          id='email'
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='email' className="text-black"
        />
        <label htmlFor="password">Password</label>
        <input
          id='password'
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='password' className="text-black"
        />
        <button onClick={onSignup}>{buttonDisabled ? "No SignUp" : "Sign Up"}</button>
        <Link href="/login">Login</Link>
      </div>
    </>
  )
}

export default page
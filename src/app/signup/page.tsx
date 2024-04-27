"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { axios } from 'axios'

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup = async () => {

  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Sign Up</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input
          id='username'
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder='Username'
        />

        <label htmlFor="email">Email</label>
        <input
          id='email'
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='email'
        />
        <label htmlFor="password">Password</label>
        <input
          id='password'
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='password'
        />
        <button onClick={onSignup}> Sign Up</button>
        <Link href="/login">Login</Link>
      </div>
    </>
  )
}

export default page
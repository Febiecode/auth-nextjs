"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { axios } from 'axios'

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })

  const onLogin = async () => {

  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <hr />
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
        <button onClick={onLogin}>Login</button>
        <Link href="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default page
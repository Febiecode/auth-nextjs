"use client";
import React, {useState} from 'react'
import axios from "axios"
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const [data,setData] = useState("nothing")
    const logout = () =>{
        try {
            axios.get('/api/users/logout')
            toast.success('Logout Successful.')
            router.push("/login")
        } catch (error:any) {
            console.log(error.message);

            toast.error(error.message);
        }
    }

    const getUserDetails = async () =>{
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen py-2'>
                <h1>Profile</h1>
                <hr />
                <p className='text-4xl'>Profile Page</p>

                <h2 className='p-1 rounded bg-green-500'>{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
                <hr />
                <button className='p-3' onClick={logout}>Logout</button>

                <button className='p-3' onClick={getUserDetails}>GetUser Details</button>
            </div>
        </>
    )
}

export default page
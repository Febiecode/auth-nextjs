import React from 'react'

const page = ({params}:any) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen py-2'>
                <h1 className='p-5 text-xl'>Profile</h1>
                <hr />
                <p className='text-4xl'>Profile Page <span className='p-2 bg-yellow-500 rounded text-black'>{params.id}</span></p>
            </div>
        </>
    )
}

export default page
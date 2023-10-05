import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main>
        <div className='py-12 flex flex-col items-center space-y-8'>
        <h1 className='text-6xl font-[600] text-center'>
        Lorem ipsum dolor sit 
        </h1>
        <p className='text-3xl font-[600]'>
        Lorem ipsum dolor sit 
        </p>
        <textarea className='w-2/3 p-4 h-[300px] border-2 outline-none rounded  border-[#00000036]'/>
        <Link href="/plans/ideagen/info" className=' px-20 rounded-[40px] text-2xl py-4 text-white bg-gradient-to-r from-[#F2BE22] to-[#F29727] font-[600]' >
            Generate
          </Link>
        </div>
   

        </main>
  )
}

export default page
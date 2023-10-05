
'use client'
import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import Link from 'next/link'


const firstBox = [
    { id: 1, title: "Web 3" },
    { id: 2, title: "IoT" },

    { id: 3, title: "Agritech" },

    { id: 4, title: "M.L" },

    { id: 5, title: "A.I" },

    { id: 6, title: "MERN" },

    { id: 7, title: "Design" },
    { id: 8, title: "App Dev" },
]

const secondBox = [{ id: 1, title: "Web 3" },]




const page = () => {
    const [firstContainer,setFirstContainer] = useState(firstBox)
    const [secondContainer,setSecondContainer]= useState([])
    const addItemHandler = (id) => {
        const item = firstContainer.find(item=>item.id ===id)
        setSecondContainer([...secondContainer,item])
        const updatedFirstContainer = firstContainer.filter(item=>item.id!==id)
        setFirstContainer(updatedFirstContainer)
        
    }

    const removeItemHandler = (id) =>{
        const item = secondContainer.find(item=>item.id ===id)
        const updatedSecondContainer = secondContainer.filter(item=>item.id!==id)
        setSecondContainer(updatedSecondContainer)
        setFirstContainer([...firstContainer,item])
        

    }
    
    return (
        <main className='py-4'>
            <h1 className='text-5xl font-[600] text-center'>
                <span className='bg-gradient-to-r from-[#F2BE22]  to-[#F29727] bg-clip-text text-transparent'> Take the</span>  best bet!
            </h1>
            <p className='font-[600] text-center my-4 text-2xl'>
                Drag your domains of interest from the “Box of Wonders” and Drop them into the “Wishing Well”!
            </p>
            <div className='flex mt-8 items-start space-x-4 justify-between'>
                <div className='md:w-1/2 flex flex-col  rounded-2xl   space-y-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-8 min-h-[400px]'>
                    <h1 className='text-3xl text-center font-bold'  >
                        Box of Wonders
                    </h1>
                    <div className='flex flex-wrap'>
                        {
                            firstContainer.map(box => <span key={box.id} className='bg-[#15989552] text-[#159895] w-48 text-center my-1 py-2 mx-4 cursor-pointer rounded' onClick={() => addItemHandler(box.id)}>{box.title}</span>)
                        }
                    </div>
                </div>
                <div className='md:w-1/2 flex flex-col  space-y-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-8 rounded-2xl min-h-[400px]'>
                    <h1 className='text-3xl text-center font-bold'>
                        The Free Wishing Well
                    </h1>
                    <div  className='flex items-start justify-start flex-wrap'> 
                    {
                        secondContainer?.map(box => <div  key={box.id} onClick={()=>removeItemHandler(box.id)} className='bg-[#15989552] text-[#159895] flex items-center justify-between px-4 w-48 text-center my-1 py-2 mx-4 cursor-pointer rounded'><AiOutlineClose color='black'/><span>{box.title}</span></div>)
                    }
                    </div>
                   
                </div>
            </div>
            <div className='flex items-center my-8 justify-center'> 

            <Link href="/plans/ideagen/info" className=' px-20 rounded-[40px] text-2xl py-4 text-white bg-gradient-to-r from-[#F2BE22] to-[#F29727] font-[600]' >
            Generate
          </Link>
            </div>

        </main>
    )
}

export default page
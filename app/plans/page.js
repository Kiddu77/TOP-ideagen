import PlanCard from '@/components/PlanCard';
import React from 'react'



const PLAN_DATA = [
    {
        id: "1",
        title: "Take the best bet!",
        desc: "Select your interests and pick the best idea available!",
        url: "plans/ideagen",
    },
    {
        id: "2",
        title: "Know what you’ll need to make it big!",
        desc: "Enter your ideas and we will help you analyse what exactly are the requirements for it to shine!",
        url: "plans/outline",
    },
];

const page = () => {
    return (
        <main className=''>
            <div className='py-12 flex flex-col items-center justify-center '>

                <h1 className='text-6xl font-[600] bg-gradient-to-r from-[#F2BE22]  to-[#F29727] bg-clip-text text-transparent'>
                    Don’t hold back! We got you!
                </h1>


                <h3 className='text-center font-[600] text-[#272727] text-2xl mt-6 '>
                    Why wait for Opportunities to knock on your door? <br />
                    Presenting you our 3 key features to help you start the next big thing, all on your own!

                </h3>
                <div className='flex items-start mt-16 space-x-8 '>
                    {
                        PLAN_DATA.map(plan => <PlanCard key={plan.id} data={plan} />)
                    }
                </div>

            </div>
        </main>
    )
}

export default page
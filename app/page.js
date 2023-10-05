import Image from 'next/image'
import Hero from "@/public/hero.png";
import Link from 'next/link';

export default function Home() {
  return (

    <main className='py-24' >
      <h1 className='text-6xl font-[600] text-[#000000] text-primary '>
        Introducing  Idea  Generator!
      </h1>
      <div className='flex items-start  my-8 justify-between'>
        <div className='py-16  flex flex-col space-y-16  items-start md:w-1/2'>

          <p className='text-[#5E5E5E] text-xl font-[500]"
]'>
            The ultimate creative paradise! <br />
            Don’t like any of the posted opportunities around you?<br />
            And also can’t think of any idea to create one?<br />
            Keep your head high! TOP’s got a plan for you!<br />
            Select your area of interest and let us give you ideas to initiate!<br />
            Take the risk and start your own project instead of joining one!

          </p>
          <Link href="/plans" className='mt-24 px-20 rounded-[40px] text-2xl py-4 text-white bg-gradient-to-r from-[#F2BE22] to-[#F29727] font-[600]' >
            Try Now
          </Link>
        </div>
        <div className='md:w-1/2 flex items-center justify-center'>

          <Image className="" src={Hero} />
        </div>

      </div>

    </main>
  )
}

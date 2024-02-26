import React from 'react'
import Image from 'next/image'
import Feat1 from "@/public/images/fea1.png"
import feappl from "@/public/images/feappl.png"
import feapic from "@/public/images/feapic1.png"


function Features() {
  return (
    <div>
    <div className='p-10 text-2xl'>Features</div>

    <div className='mx-40 my-8 bg-black w-100 h-100 rounded-lg'>

      <div className='grid grid-cols-2 gap-0'>

        <div className='pl-20 text-white'>
          <h1 className='pt-20  text-3xl font-semibold '>FEATURED VIEWS</h1>
          <h2 className='pb-8 text-gray-400 text-xl '>Some of the views</h2>
          <h3 className='text-gray-400'>Present the job matching service that</h3>
           <h3 className='text-gray-400'>connect talent with creative industry </h3>
           <h3 className='text-gray-400'>opportunties. </h3>
          <button className='mb-16 mt-10 text-xl px-8 py-2 bg-gradient-to-r from-gray-900 to-orange-500 rounded'>Read More</button>

        </div>

        <div className=''>
          <div className=' bg-white rounded-lg mr-40 mt-32 '>
            <div className='grid grid-cols-2 gap-2 ml-4 '>
              <div className='pt-2 '>
                <h1 className='text-xl font-bold pt-5 pb-3'>Featured</h1>
                <h3 className='text-xs pb-5'>Present the job matching service that connect</h3>
              </div>

              <div>
                <Image src={feappl} className='pt-10 pl-6'/>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

    {/* Feature 2 */}

    <div className='bg-black rounded'>
      <h1 className='text-center text-white my-10 mr-20'>Second Feature Section</h1>
      <div className='grid grid-cols-2 gap-2 pb-10'>
        <div className=''>
          <Image src={feapic}/>
        </div>

        <div className='text-white'>
          <div>
            ccc
          </div>
          <div>
            ccccccc
          </div>

        </div>
      </div>
    </div>


    <div>
    <div class="grid grid-cols-2 gap-0 mt-20 ">
        <div>
        <Image src={Feat1} className='h-85 w-full'/>
        </div>
        
        <div className='p-20 bg-gray-300'>
        {/* <Image src={Feat1} width={500} /> */}
          <h1 className='text-5xl'>Title</h1>
          <h2 className='text-2xl pb-5'>Heading2 Heading2</h2>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer ipsum felis, porttitor sed scelerisque sed, iaculis ac eros. Suspendisse mollis molestie erat a porttitor.</p>
        </div>

      </div>
      
      <div class="grid grid-cols-2 gap-0">

      <div className='p-20 bg-gray-300'>
        {/* <Image src={Feat1} width={500} /> */}
          <h1 className='text-5xl'>Title</h1>
          <h2 className='text-2xl pb-5'>Heading2 Heading2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer ipsum felis, porttitor sed scelerisque sed, iaculis ac eros. Suspendisse mollis molestie erat a porttitor.</p>
        </div>
      
        <div>
        <Image src={Feat1} width={800} height={400} className=''/>
        </div>

      </div>
      </div>

</div>
  )
}

export default Features
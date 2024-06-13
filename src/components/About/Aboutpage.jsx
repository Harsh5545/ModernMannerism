import Image from 'next/image'
import React from 'react'

function Aboutpage() {
  return (
    <div className='flex flex-col md:flex-row  items-center gap-5 justify-center w-full h-full py-24'>
    <div className='flex-1 w-full flex items-end justify-end'>
    <Image src='/assets/course3.jpg' height={400} width={600} alt='modern Mannerism'/>
    </div>  
<div className='flex-1 flex-col flex text-center gap-5 '>
<div className='px-2 md:w-[90%] w-full flex text-center flex-col gap-6'>
<div className="flex pb-10 flex-col items-center gap-2 justify-center">
<h1 className=' text-black text-xl md:text-4xl font-semibold dark:text-white'>ABOUT US</h1>
<hr className="h-1 bg-[#933469] w-16" /></div>

    <p className=' md:text-lg text-base'>
Modern Mannerism provides professional-quality training and learning globally. We help professionals, corporates, and organizations to embrace transformation and accomplish breakthrough performance by becoming proficient at the skills.
</p><p className=' md:text-lg text-base'>
Modern Mannerism is devoted to providing excellence in training and learning to individuals of all age groups. We help in Managing and Improving Self-esteem as well as Appearance management.
Each module is designed after reviewing lifestyle, goals and personality traits systematically.
</p><p className=' md:text-lg text-base' >
Our services comprise Business Etiquette & Corporate Image Programme, Children’s Etiquette Programme, Ladies Grooming & Image Enhancement Programme, Fine Dining & Table Etiquette Workshop, Professional Image & Attire, Communication & Soft Skills Training and Personality Enhancement Programme.
</p></div>
</div>  
    </div>
  )
}

export default Aboutpage
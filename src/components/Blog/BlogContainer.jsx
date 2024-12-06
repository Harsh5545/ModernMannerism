import Image from 'next/image';
import clsx from 'clsx';
import { Playfair_Display, Montserrat, Cormorant_Garamond } from "next/font/google";
import { AiOutlineComment } from 'react-icons/ai'; // Import for comment icon

const playfair = Playfair_Display({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const cormorant = Cormorant_Garamond({ weight: '500', subsets: ['latin'] }); // Specify weight here

const BlogContainer = ({ title, description, imageSrc, reverse, categories = false, commentCount = 0 }) => (
  
<div className=' flex flex-col justify-center items-center w-full'>
<div className={clsx(
    "flex flex-col md:flex-row border-2 items-start py-10 w-full px-12 mx-4 md:px-10 gap-8  md:max-w-5xl border-b",
    reverse && "md:flex-row-reverse",
    "border-gray-300 dark:border-gray-600",
    "bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
  )}>
    {/* Title and Description Section */}
    <div className="md:w-1/2 flex items-center justify-center z-10">
      <div className="w-full space-y-4">
        <h2 className={`${montserrat.className} text-4xl font-semibold mb-4 text-gray-800 dark:text-white uppercase`}>{title}</h2>
        <div
          className={clsx(
            "bg-[#e6d5e3] dark:bg-gray-800 bg-opacity-90 text-center p-6 rounded-lg shadow-lg",
            "relative md:mr-10 md:max-w-[90%]",
            reverse ? "md:-left-20" : "md:-right-28"
          )}
        >
          {categories && <h3 className='md:text-base text-sm text-start font-semibold mb-4 text-[#977059] dark:text-white uppercase'>{categories}</h3>}
          <p className={`${cormorant.className} text-black-600 text-2xl md:text-3xl md:text-start dark:text-gray-300`}>{description}</p>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 relative w-full h-[200px] md:h-[300px]">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg bg-no-repeat shadow-md"
      />
    </div>

    {/* Comment Section */}
   
  </div></div>
);

export default BlogContainer;

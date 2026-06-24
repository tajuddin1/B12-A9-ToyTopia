import React from 'react';
import categoryImg1 from '../../assets/image/slider-1.jpg'
import categoryImg2 from '../../assets/image/slider-2.jpg'
import categoryImg3 from '../../assets/image/slider-3.jpg'
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
const Category = () => {
  return (
    <div className='grid lg:grid-cols-3 lg:grid-rows-2 gap-3 md:gap-4 lg:gap-6 xl:gap-8'>
      <div className="card md:min-h-100 flex justify-center rounded-xl overflow-hidden md:row-span-2 md:col-span-2">
        <div className='relative bg-[#0302219b] bg-soft lg:w-4/6 h-full flex justify-center items-center z-1 p-8 md:p-12 lg:p-16 xl:p-20'>
          <div>
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-base-100 font-BG font-bold mb-6'>Educational Toys</h1>
            <p className='text-sm md:text-base text-base-300 mb-6 font-light'>The Math Learning Board is a thoughtfully designed toy that combines entertainment, creativity, and learning in a single package. Children can spend hours exploring new ideas, building confidence, and developing important cognitive and motor skills while playing. Made from high-quality, child-friendly materials, this toy is durable, safe, and suitable for everyday use.</p>
            <Link className='btn btn-link text-base-100 text-base px-0'>View More <FaArrowRight/></Link>
          </div>
        </div>
        <img className='absolute w-full h-full object-cover' src={categoryImg1} alt="" />
      </div>
      <div className="card md:min-h-100 flex justify-center rounded-xl overflow-hidden">
        <div className='relative bg-[#0302219b] bg-soft w-full h-full flex items-center z-1 p-8 md:p-12 lg:p-16 xl:p-20'>
          <div>
            <h1 className='text-2xl md:text-4xl text-base-100 font-BG font-bold mb-5'>Soft Toys</h1>
            <Link className='btn btn-link text-base-100 text-base px-0'>View More <FaArrowRight/></Link>
          </div>
        </div>
        <img className='absolute w-full h-full object-cover' src={categoryImg2} alt="" />
      </div>
      <div className="card md:min-h-100 flex justify-center rounded-xl overflow-hidden">
        <div className='relative bg-[#0302219b] bg-soft w-full h-full flex items-center z-1 p-8 md:p-12 lg:p-16 xl:p-20'>
          <div>
            <h1 className='text-2xl md:text-4xl text-base-100 font-BG font-bold mb-5'>Building Blocks</h1>
            <Link className='btn btn-link text-base-100 text-base px-0'>View More <FaArrowRight/></Link>
          </div>
        </div>
        <img className='absolute w-full h-full object-cover' src={categoryImg3} alt="" />
      </div>
    </div>
  );
};

export default Category;
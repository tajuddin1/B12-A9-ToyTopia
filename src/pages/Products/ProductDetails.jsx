import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { BsBag, BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import { FaChevronDown, FaChevronRight, FaChevronUp, FaStore } from 'react-icons/fa';
import { BiCart, BiSolidCheckCircle } from 'react-icons/bi';
import Modal from '../../components/Modal/Modal';
import ProductCard from '../../components/ProductCard/ProductCard';
import Error404 from '../Error/Error404';

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData();
  const [isExpanded, setIsExpanded] = useState(false)
  const product = products.find(toy => toy.toyId === parseInt(productId));

  if (!product) {
    return (
      <Error404/>
    )
  }

  const { toyName, pictureURL, description, sellerName, sellerEmail, rating, availableQuantity, price, subCategory } = product;
  
  return (
    <>
      <div className='py-10 md:py-20'>
        <title>{`${toyName} - ToyTopia`}</title>
        <div className="max-w-340 mx-auto px-2 sm:px-4">
          <div className="grid md:grid-cols-2 gap-10  p-5 sm:p-8 bg-base-100 rounded-xl">
            <div>
              <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-5'>
                <div className="flex md:flex-col aspect-square max-w-18 sm:max-w-20 lg:max-w-25 xl:max-w-30 gap-2 sm:gap-5">
                  <img src={pictureURL} className=' p-3 sm:p-4 border border-base-300 rounded-lg' alt="" />
                  <img src={pictureURL} className=' p-3 sm:p-4 border border-base-300 rounded-lg' alt="" />
                  <img src={pictureURL} className=' p-3 sm:p-4 border border-base-300 rounded-lg' alt="" />
                  <img src={pictureURL} className=' p-3 sm:p-4 border border-base-300 rounded-lg' alt="" />
                </div>
                <div className="flex items-center justify-center">
                  <img src={pictureURL} className='max-h-70 sm:max-h-full h-full object-contain' alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="badge badge-soft rounded-full badge-primary">
                {subCategory}
              </div>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold font-BG'>{toyName}</h1>
              <div className='flex items-center gap-1'>
                <Rating className='text-accent' emptySymbol={<BsStar className='w-4 h-4 sm:w-6 sm:h-5' />} fullSymbol={<BsStarFill  className='w-4 h-4 sm:w-6 sm:h-5' />} initialRating={rating} readonly />
                <span className='text-sm sm:text-base font-semibold'>{rating} Rating</span>
                <div className="divider divider-horizontal mx-0 my-1"></div>
                <span className='text-sm sm:text-base'>Only <strong className='text-success'>{availableQuantity}</strong> items left</span>
              </div>
              <div className='flex items-center gap-10'>
                <h3 className='text-5xl font-bold text-accent font-BG'>${price}</h3>
                <div className="badge badge-soft text-sm sm:text-base badge-success font-semibold rounded-full"> <BiSolidCheckCircle/> In Stock</div>
              </div>
              <div className='flex justify-between items-center border border-mist-100 hover:bg-mist-50 py-4 px-5 rounded-2xl'>
                <div className='flex gap-4'>
                  <span className='badge-soft badge-primary h-15 w-15 flex items-center justify-center rounded-t-full'>
                    <FaStore className='w-8 h-8' />
                  </span>
                  <div>
                    <p className='text-xs h-4 text-mist-400'>Sold By</p>
                    <p className='text-base font-bold'>{ sellerName }</p>
                    <p className='text-sm text-accent'>{ sellerEmail }</p>
                  </div>
                </div>
                <Link className='text-primary p-2 rounded-full bg-mist-100 border border-mist-200'><FaChevronRight/></Link>
              </div>
              <div>
                <p className='font-bold mb-1'>Product Description</p>
                <div>
                  <div className={`text-sm sm:text-base ${!isExpanded ? "line-clamp-4" : "" }`}>
                    {description}
                  </div>
                  <button onClick={() => setIsExpanded(!isExpanded)} className='text-accent text-sm'>
                    {!isExpanded ? <span className='flex items-center gap-1'> Read More <FaChevronDown className='w-2.5 h-2.5'/> </span> : <span className='flex items-center gap-2'> Read Less <FaChevronUp className='w-2.5 h-2.5'/> </span>}
                  </button>
                </div>
              </div>
              <div className='flex gap-3'>
                <Link onClick={()=>document.getElementById('form_modal').showModal()} className='btn flex-1 btn-accent text-base-100 text-md'><BsBag/> Try Now</Link>
                <Link className='btn flex-1 btn-outline btn-accent hover:text-base-100 text-md'> <BiCart/> Add To Cart</Link>
              </div>
            </div>
          </div>
        </div>
        <Modal/>
      </div>
      <div className='max-w-340 mx-auto pb-16 px-2 sm:px-4'>
        <h1 className='text-3xl md:text-4xl font-bold font-BG mb-6 lg:mb-10 xl:mb-12'>You Might Also Like</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8">
          {
            products.slice(5, 9).map(product => <ProductCard key={product.toyId} product={product}/>)
          }
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  const { toyId, toyName , pictureURL, rating, availableQuantity , price , subCategory} = product;
  return (
    <div className="card hover:-translate-y-3 transition-all duration-200 ease-in p-3 md:p-4 lg:p-5 border bg-base-100 border-base-300">
      <div>
        <div className="badge badge-sm sm:badge-md badge-soft badge-primary mb-2">
          {subCategory}
        </div>
        <img className='max-h-25 md:max-h-50 md:min-h-50 xl:max-h-70 xl:min-h-70 mx-auto mb-5' src={pictureURL} alt="" />
      </div>
      <div>
        <h3 className='text-sm sm:text-base md:text-xl xl:text-2xl font-BG font-bold mb-2 md:mb-3 hover:text-accent md:line-clamp-1'><Link to={`/shop/${toyId}`}>{toyName}</Link></h3>
        <div className='flex items-center gap-1'>
          <Rating className='text-accent md:h-5' emptySymbol={<BsStar className='w-3 h-3' />} fullSymbol={<BsStarFill className='w-3 h-3' />} initialRating={rating} readonly />
          <span className='font-semibold text-xs md:text-sm'>{rating}</span>
        </div>
        <div className="flex justify-between gap-3 items-baseline md:-mt-2 mb-3">
          <p className='text-xs md:text-sm'>(Only <strong>{availableQuantity}</strong> items left)</p>
          <h3 className='text-xl sm:text-3xl xl:text-4xl font-bold'>${ price }</h3>
        </div>
        <Link to={`/shop/${toyId}`} className='btn btn-sm btn-warning text-black text-sm sm:text-base font-semibold btn-block'>View More</Link>
      </div>
    </div>
  );
};

export default ProductCard;
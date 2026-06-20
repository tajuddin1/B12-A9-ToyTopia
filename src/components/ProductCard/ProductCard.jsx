import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  const { toyId, toyName , pictureURL, rating, availableQuantity , price , subCategory} = product;
  return (
    <div className="card p-5 border bg-base-100 border-base-300">
      <div>
        <div className="badge badge-soft badge-primary mb-2">
          {subCategory}
        </div>
        <img className='max-h-70 min-h-70 mx-auto mb-5' src={pictureURL} alt="" />
      </div>
      <div>
        <h3 className='text-2xl font-BG font-bold mb-3 hover:text-accent line-clamp-1'><Link>{toyName}</Link></h3>
        <div className='flex items-center gap-1'>
          <Rating className='text-accent h-5' emptySymbol={<BsStar />} fullSymbol={<BsStarFill />} initialRating={rating} readonly />
          <span className='font-semibold text-sm'>{rating}</span>
        </div>
        <div className="flex justify-between items-baseline -mt-2 mb-3">
          <p className='text-sm'>(Only <strong>{availableQuantity}</strong> items left)</p>
          <h3 className='text-4xl font-bold'>${ price }</h3>
        </div>
        <Link to={`/shop/${toyId}`} className='btn btn-warning text-black text-base font-semibold btn-block'>View More</Link>
      </div>
    </div>
  );
};

export default ProductCard;
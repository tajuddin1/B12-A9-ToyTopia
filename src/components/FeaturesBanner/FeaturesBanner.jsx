import React from 'react';
import freeShipping from '../../assets/image/free-delivery-free-svgrepo-com.svg'
import support from '../../assets/image/customer-service-worker-svgrepo-com.svg'
import moneyReturn from '../../assets/image/money-cash-svgrepo-com.svg'
import discount from '../../assets/image/shopping-bag-discount-svgrepo-com.svg'
const FeaturesBanner = () => {
  return (
    <div className='flex justify-between gap-10 p-12 rounded-2xl bg-base-100'>
      <div className="flex items-center gap-4">
        <img className='w-15' src={freeShipping} alt="" />
        <div>
          <h4 className='text-xl font-BG font-bold'>Free Shipping</h4>
          <p>Free shipping on all order</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img className='w-15' src={support} alt="" />
        <div>
          <h4 className='text-xl font-BG font-bold'>Support 24 / 7</h4>
          <p>Support 24 hours a day</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img className='w-15' src={moneyReturn} alt="" />
        <div>
          <h4 className='text-xl font-BG font-bold'>Money Return</h4>
          <p>Moneyback gurantey in 5days</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img className='w-15' src={discount} alt="" />
        <div>
          <h4 className='text-xl font-BG font-bold'>Order Discount</h4>
          <p>On every order upto 50$</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
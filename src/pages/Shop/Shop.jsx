import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useLoaderData } from 'react-router';

const Shop = () => {
  const products = useLoaderData();
  return (
    <div>
      <title>Shop - ToyTopia</title>
      <div className='max-w-340 mx-auto py-16'>
        <h1 className='text-4xl text-center font-bold font-BG mb-12'>Shop</h1>
        <div className="grid grid-cols-4 gap-8">
          {
            products.map(product => <ProductCard key={product.toyId} product={product}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Shop;
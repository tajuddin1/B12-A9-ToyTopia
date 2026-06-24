import React from 'react';
import Slider from '../../components/Slider/Slider';
import { useLoaderData } from 'react-router';
import ProductCard from '../../components/ProductCard/ProductCard';
import FeaturesBanner from '../../components/FeaturesBanner/FeaturesBanner';
import Category from '../../components/Category/Category';

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <title>Home - ToyTopia</title>
      <Slider />
      <div className='max-w-340 mx-auto py-10 lg:py-16 px-4'>
        <h1 className='text-3xl md:text-4xl text-center font-bold font-BG mb-6 lg:mb-10 xl:mb-12'>Popular Toys</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 xl:gap-8">
          {
            products.slice(0, 4).map(product => <ProductCard key={product.toyId} product={product}/>)
          }
        </div>
      </div>
      <div className="max-w-340 mx-auto px-4">
        <h1 className='text-3xl md:text-4xl text-center font-bold font-BG mb-6 lg:mb-10 xl:mb-12'>Categories</h1>
        <Category/>
      </div>
      <div className='max-w-340 mx-auto py-20 px-4'>
        <FeaturesBanner />
      </div>
    </div>
  );
};

export default Home;
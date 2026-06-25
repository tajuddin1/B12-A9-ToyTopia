import React from 'react';
import { Link, useNavigate } from 'react-router';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-[70vh] md:min-h-[80vh] flex items-center py-10 px-3 md:px-4'>
      <title>404 Error - ToyTopia</title>
      <div className="max-w-220 w-full mx-auto text-center bg-base-100 rounded-2xl p-10">
        <h1 className='text-[140px] md:text-[200px] lg:text-[250px] font-bold font-BG leading-35 md:leading-50 lg:leading-60 text-mist-400'>404</h1>
        <p className='uppercase text-3xl md:text-4xl font-black font-BG text-mist-70 mb-3'>Opps! page not found</p>
        <p className='text-lg text-mist-800 font-bold mb-6'>Sorry the page you're looking for does not exist.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link className='btn px-10 btn-accent text-base-100' onClick={()=> navigate(-1)}>Back</Link>
          <Link className='btn btn-outline px-10 btn-accent hover:text-base-100' to={`/`}>Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
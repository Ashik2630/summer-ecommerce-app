import React from 'react';
import PopularProduct from './PopularProduct';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const PopularProducts = async() => {
    const res = await fetch('https://summer-ecommerce-app.vercel.app/productsData.json');
    const products = await res.json();
    const popularProducts = products.slice(0, 8);
    
    return (
        <div className='container mx-auto   mb-50'>
           <div className='flex justify-between text-[#1d9e75]'>
            <h2 className='text-2xl font-bold my-10'> PopularProducts</h2>
            <Link className='flex items-center gap-2' href={`/products`}>View All <FaArrowRightLong /></Link>
           </div>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    popularProducts.map(product => 
                        <PopularProduct key={product.id} product={product}/>
                    )
                }
            </div>
        </div>
    );
};

export default PopularProducts;
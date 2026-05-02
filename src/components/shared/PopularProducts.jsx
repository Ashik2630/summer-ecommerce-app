import React from 'react';
import PopularProduct from './PopularProduct';

const PopularProducts = async() => {
    const res = await fetch('https://summer-ecommerce-app.vercel.app/productsData.json');
    const products = await res.json();
    const popularProducts = products.slice(0, 4);
    // console.log(popularProducts)
    return (
        <div className='container mx-auto   mb-50'>
           <h2 className='text-2xl font-bold my-10'> PopularProducts</h2>
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
import PopularProduct from '@/components/shared/PopularProduct';
import React from 'react';

const ProductsPage = async() => {
    const res = await fetch('https://summer-ecommerce-app.vercel.app/productsData.json')
    const products =  await res.json();

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-2xl font-bold mb-5 text-[#1d9e75]'>ALL Products</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    products.map(product => <PopularProduct key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;
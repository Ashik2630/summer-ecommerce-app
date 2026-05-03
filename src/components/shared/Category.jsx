import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async() => {
    const res = await fetch('https://summer-ecommerce-app.vercel.app/category.json')
    const categories = await res.json();

    return (
        <div className='mb-5 flex-reverse md:flex md:gap-5 mx-5 md:mx-0'>
            <Link href='?category='>
                <Button className="bg-[#419f81] hover:underline scale-105 transition-transform my-2 mx-2">
                    All
                </Button>
            </Link>
            {
                categories.map(category => <Link key={category.id} href={`?category=${category.category.toLowerCase()}`}>
                    <Button className="bg-[#419f81] hover:underline scale-105 transition-transform my-2 mx-2">
                        {category.category}
                    </Button>
                </Link>)
            }
        </div>
    );
};

export default Category;
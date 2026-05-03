import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            Global Loading
            <HashLoader />
            
        </div>
    );
};

export default LoadingPage;
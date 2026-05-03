import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='flex h-[50vh] items-center justify-center'>
            <span>Global Loading...</span>
            <HashLoader />
            
        </div>
    );
};

export default LoadingPage;
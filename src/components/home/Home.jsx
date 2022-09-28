import React from 'react';
import Discover from './discover/Discover';
import Search from './search/Search';
import ShouldCat from './shouldCat/ShouldCat';

const Home = ({ deviceMobile }) => {
    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <Search deviceMobile={deviceMobile} />
            <Discover />
            <ShouldCat />
        </div>
    )
}

export default Home
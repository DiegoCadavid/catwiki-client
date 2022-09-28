import React from 'react'
import DiscoverImageContainer from './DiscoverImageContainer'
import DiscoverSlogan from './DiscoverSlogan'

import './Discover.css'

const Discover = () => {
  return (
    <div className='discover'>
      <h4>Most Searched Breeds</h4>
      <span className='line_bottom'> </span>
      <DiscoverSlogan />
    <DiscoverImageContainer />




    </div>
  )
}

export default Discover
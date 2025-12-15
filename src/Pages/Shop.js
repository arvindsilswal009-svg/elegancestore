import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollection from '../Components/Newcollection/Newcollection';
import Emailoffer from '../Components/Emailoffer/Emailoffer';
import Footer from '../Components/Footer/Footer';

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollection/>
        <Emailoffer/>
        
    </div>
  )
}

export default Shop;
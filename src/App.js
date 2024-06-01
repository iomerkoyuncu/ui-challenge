import React, { useState } from 'react';
import Featured from './components/Featured';
import Products from './components/Products';
import WhyJoinUs from './components/WhyJoinUs';
import BecauseTheyLoveUs from './components/BecauseTheyLoveUs';
import GrowYourCollection from './components/GrowYourCollection';
import ShoesCollected from './components/ShoesCollected';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Featured />
      <Products />
      <WhyJoinUs />
      <BecauseTheyLoveUs />
      <GrowYourCollection />
      <ShoesCollected />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill />
    </>
  );
}

export default Home;
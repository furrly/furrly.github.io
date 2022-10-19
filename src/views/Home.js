import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import GeneralInformation from '../components/sections/GeneralInformation';

const Home = () => {

  return (
    <>
      <Hero />
      <GeneralInformation />
      <FeaturesSplit invertMobile topDivider imageFill />
    </>
  );
}

export default Home;
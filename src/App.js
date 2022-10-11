import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import DefaultLayout from './layouts/DefaultLayout';

import Home from './views/Home';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <DefaultLayout>
          <Home/>
        </DefaultLayout>
      )} />
  );
}

export default App;
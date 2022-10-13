import React, { useRef, useEffect } from 'react';
import { useLocation, Switch  } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import DefaultLayout from './layouts/DefaultLayout';

import Home from './views/Home';
import Privacy from './components/sections/Privacy';
import Term from './components/sections/Term';

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
        <Switch>
          <AppRoute exact path="/" component={Home} layout={DefaultLayout} />
          <AppRoute exact path="/privacy" component={Privacy} layout={DefaultLayout} />
          <AppRoute exact path="/terms" component={Term} layout={DefaultLayout} />
        </Switch>
      )} />
  );
}

export default App;
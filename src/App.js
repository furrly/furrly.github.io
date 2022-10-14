import React, { useRef, useEffect, Suspense } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import DefaultLayout from './layouts/DefaultLayout';

import Home from './views/Home';
import Privacy from './components/sections/Privacy';
import Terms from './components/sections/Terms';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
  }, [location]);

  return (
    <Suspense fallback={<div></div>}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={DefaultLayout} />
            <AppRoute exact path="/privacy" component={Privacy} layout={DefaultLayout} />
            <AppRoute exact path="/terms" component={Terms} layout={DefaultLayout} />
          </Switch>
        )} />
    </Suspense>
  );
}

export default App;
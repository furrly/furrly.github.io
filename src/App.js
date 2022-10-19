import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import DefaultLayout from './layouts/DefaultLayout';

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Privacy from './views/Privacy';
import Terms from './views/Terms';
import HeaderLayout from './layouts/HeaderLayout';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    window.scrollTo(0, 0);
  }, [location]);

  return (
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={DefaultLayout} />
            <AppRoute exact path="/about" component={About} layout={HeaderLayout} />
            <AppRoute exact path="/contact" component={Contact} layout={HeaderLayout} />
            <AppRoute exact path="/privacy" component={Privacy} layout={HeaderLayout} />
            <AppRoute exact path="/terms" component={Terms} layout={HeaderLayout} />
          </Switch>
        )} />
  );
}

export default App;
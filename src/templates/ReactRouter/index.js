import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './Menu';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import './style.min.css';

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about/:slug?/:id?" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        {/* <Route path="*" component={Page404} exact /> */}
      </Switch>
    </BrowserRouter>
  );
};


export default ReactRouter;

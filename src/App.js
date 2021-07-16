import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {  Switch, Route, Redirect } from 'react-router';
import './App.css';
import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./Common/Footer";
function App() {
  return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
  );
}

export default App;

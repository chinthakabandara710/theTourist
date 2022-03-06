import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import OurGallery from './Components/pages/OurGallery';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Services'>
            <Services />
          </Route>
          <Route exact path='/OurGallery'>
            <OurGallery />
          </Route>
          <Route exact path='/SignUp'>
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;


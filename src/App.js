import './App.css';
//import './styles.scss';
import './index.css';

import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import Gallery from "./pages/Gallery"
import Studio from "./pages/Studio"
import One from "./pages/One"
import Main from "./components/Main"




function App() {
  return (
    <div className="App">
    
    <Nav />
    <Switch>

<Route exact path="/"> <Gallery /> </Route>

<Route path="/Studio"> <Studio /> </Route>

<Route path="/gallery"> <Gallery /> </Route>

    <Route path="/gallery/:apartment"
    render={(routerProps) => <Gallery {...routerProps} />} />




       <Route path="/main"> <Main /> </Route>
       




          </Switch>
  





    </div>
  );
}

export default App;

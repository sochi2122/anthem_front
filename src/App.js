import './App.css';
//import './styles.scss';
import './index.css';

import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import Gallery from "./pages/Gallery"
import Studio from "./pages/Studio"
import Index from "./pages/Index"
import Main from "./components/Main"
import Show from "./pages/Show"
import 'bootstrap/dist/css/bootstrap.min.css';
import Vr from './components/Vr';



function App() {
  return (
    <div className="App">
    

    
    <Nav />

    <Main />
    
    <Switch>


 

    <Route exact path="/gallery"> <Gallery /> </Route>

    <Route exact path="/show"> <Show /> </Route>

    <Route exact path="/studio"> <Studio /> </Route>

    <Route exact path="/vr"> <Vr /> </Route>

    <Route exact path="/index"> <Index /> </Route>

    <Route exact path="/show"> <Show /> </Route>




    </Switch>


</div>

  );
}

export default App;

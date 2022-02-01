import {Link} from 'react-router-dom';
import React from "react"
import '../gallery.css';
import '../index.css';
import '../bootstrap.css';


const Nav = (props) =>{
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">




        <Link to="/">
        <button type="button" className="navbar-brand">
          <a className="nav-link active" href="/" >Listings
          </a> </button> </Link>


          <Link to="/gallery">
          <button type="button" className="navbar-brand"> 
          <a className="nav-link active" href="/gallery">  Gallery 
          </a></button></Link>



        <Link to="/vr">
        <button class="navbar-brand" type="button" >
          <a className="nav-link" href="/vr">3D Tour</a>
        </button></Link>


     

        <Link to="/studio">
        <button class="navbar-brand" type="button" >
          <a className="nav-link" href="/studio">Studio </a>
        </button></Link>

        





</div>


</nav>

    )
}

export default Nav;
import {Link} from 'react-router-dom';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = (props) =>{
    return(

        <div className="nav">

<Link to="/">
    <div> Listings </div>
</Link>

<Link to="/gallery">
<div> Gallery </div>
</Link>


<Link to="/vr">
<div>3D Tour </div>
</Link>



<Link to="/one">
<div>One </div>
</Link>




<Link to="/index">
<div>Index </div>
</Link>



<Link to="/Studio">
<div>Studio </div>
</Link>


        </div>
    )
}

export default Nav;
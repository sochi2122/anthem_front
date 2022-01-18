import {Link} from 'react-router-dom';
import React from "react"


const Nav = (props) =>{
    return(

        <div className="nav">

<Link to="/">
    <div> home </div>
</Link>

<Link to="/gallery">
<div> Gallery </div>
</Link>


<Link to="/main">
<div>Main </div>
</Link>

        </div>
    )
}

export default Nav;
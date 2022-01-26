// import { Link } from 'react-router-dom';
import apartments from "../pages/Index"
// import '../gallery.css';
// import '../index.css';
// import '../bootstrap.css';
// import React from 'react'

import { Link } from 'react-router-dom';
import '../gallery.css';
import '../index.css';
import '../bootstrap.css';


function Studio(props) {

const apartments = props.apartments.map((apartment) => (

			<>
			<div key={apartments._id} className="col-md-6" >

				<Link to={`/apartments/${apartment._id}`}>
				<button>Apt  {apartments.unit}</button>
				</Link>
				<br />

				{<img src={apartments.media} alt={apartment.unit} /> }
								<br />

				<h3>{apartments.description}</h3>
				<br />

				<br></br>	<br></br>
			</div> 			 

			</>))

		}


	


	  
	  



			

export default Studio;


{/* // 		return props.apartments.map((apartment) => (
// 			<div key={apartment._id} className='apartment'>
// 				<Link to={`/apartments/${apartment._id}`}>
// 					<h1>{apartment.unit}</h1>
// 				</Link>
				
// 				{<img src={apartment.media} alt={apartment.unit} /> }
				
// 				<h3>{apartment.description}</h3>
// 			</div>
// 		)
// 		) */}



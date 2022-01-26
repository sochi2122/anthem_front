import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../gallery.css';
import '../index.css';
import '../bootstrap.css';


function Index(props) {

	const [newForm, setNewForm] = useState(
	// 	{
	// 	unit: '',
	// 	media: '',
	// 	description: '',
	// }
	
	[]);

	// handleChange - will capture user input as it's typed 
	const handleChange = (event) => {
		setNewForm((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.createApartments(newForm);
		setNewForm({
			unit: '',
			media: '',
			description: '',
		});
	};

	// handleSubmit - will submit our new user for creation

	const loaded = () => {
		return props.apartments.map((apartment) => (

			<>


<br></br>
			<div key={apartment._id} className="col-md-6" >

				<Link to={`/apartments/${apartment._id}`}>
				<button>Apt  {apartment.unit}</button>
				</Link>
				<br />

				{<img src={apartment.media} alt={apartment.unit} /> }
								<br />

				<h3>{apartment.description}</h3>
				<br />

				<br></br>	<br></br>
			</div> 			 

			</>

		));
	};

	const loading = () => {

		return <img src="https://i.ibb.co/9VK8chv/Hotel-Number0.jpg" alt="ent" width="150px" height="75px" ></img>;
	};

	  return (
  <> 

<div className="row">
{props.apartments ? loaded() : loading()}
</div>
<br />
<br />




			
<br/>



					
<br />
<br />
<br />	

<br />
<br />
<br />
<div></div>

<div className="container">


				<form onSubmit={handleSubmit}>
					<input
						type='number'
						value={newForm.unit}
						name='unit'
						placeholder='unit'
						onChange={handleChange}
						required
						textarea 
						className="form-control"
						aria-label="Large" 
					/>
					<br />


					
					<input
						type='url'
						value={newForm.media}
						name='media'
						placeholder='media URL'
						textarea 
						required
						className="form-control"
						aria-label="Large" 
						onChange={handleChange}
					/>
					<br />


					  <input
						type='text'
						value={newForm.description}
						name='description'
						placeholder='description'
						textarea 
						required
						className="form-control"
						aria-label="Large" 
						aria-describedby="inputGroup-sizing-sm"
						maxLength="800"
						onChange={handleChange}


						/>

					


					<br />
					<input button='submit' type='submit' value='Create Apartment' />
				</form>
				</div>  



			



				</>

			
		);
}

export default Index;

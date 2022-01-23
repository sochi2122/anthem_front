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
			<div className=" grid" >

			<div className ="item"> 
			<div key={apartment._id} className='apartment'>
				<Link to={`/apartments/${apartment._id}`}>
					<h1>{apartment.unit}</h1>
				</Link>
				
				{<img src={apartment.media} alt={apartment.unit} /> }
				
				<h3>{apartment.description}</h3>
			</div> 
			</div>
			</div>
		));
	};

	const loading = () => {

		return <h1>Loading</h1>;
	};

	  return (
<>

<div className="wrapper">

{props.apartments ? loaded() : loading()}




</div>

			
<br/>

<div>


					
<br />
<br />
<br />					
<br />
<br />
<br />

				<form onSubmit={handleSubmit}>
					<input
						type='number'
						value={newForm.unit}
						name='unit'
						placeholder='unit'
						onChange={handleChange}
						required
					/>
					<br />


					
					<input
						type='url'
						value={newForm.media}
						name='media'
						placeholder='media URL'
						onChange={handleChange}
					/>
					<br />


					  <input
						type='text'
						value={newForm.description}
						name='description'
						placeholder='description'
						textarea 
						required="true" 
						className="form-control"
						aria-label="Large" 
						aria-describedby="inputGroup-sizing-sm"
						maxlength="800"
						onChange={handleChange}


						/>

					
<br />
<br />
<br />

					<br />
					<input button='submit' type='submit' value='Create Apartment' />
				</form>
				</div>  




				</>

			
		);
}

export default Index;

import { useState } from 'react';
import { Link } from 'react-router-dom';


import '../gallery.css';
import '../index.css';
import '../bootstrap.css';


function Studio(props) {

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
			<div key={apartment._id} className='apartment'>
				<Link to={`/apartments/${apartment._id}`}>
					<h1>{apartment.unit}</h1>
				</Link>
				
				{<img src={apartment.media} alt={apartment.unit} /> }
				
				<h3>{apartment.description}</h3>
			</div>
		));
	};

	const loading = () => {

		return <h1>Loading</h1>;
	};

	  return (

			<div className="form">
			
				{props.apartments ? loaded() : loading()}




				<form style={{marginTop: '5rem'}} onSubmit={handleSubmit}>
					<input
						
						onChange={handleChange}
					/>
					<br />
					<input
						
						onChange={handleChange}
					/>
					<br />
					<input
						
						onChange={handleChange}
					/>
					<br />
				</form>


			</div>
		);
}

export default Studio;

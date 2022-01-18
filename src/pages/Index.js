import { useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props) {

	const [newForm, setNewForm] = useState({
		unit: '',
		media: '',
		description: '',
	});

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
				{/* <img src={person.image} alt={person.name} /> */}
				<h3>{apartment.description}</h3>
			</div>
		));
	};

	const loading = () => {

		return <h1>Loading</h1>;
	};

	  return (

			<div className="form">
				<form style={{marginTop: '5rem'}} onSubmit={handleSubmit}>
					<input
						type='text'
						value={newForm.unit}
						name='unit'
						placeholder='unit'
						onChange={handleChange}
					/>
					<br />
					<input
						type='text'
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
						onChange={handleChange}
					/>
					<br />
					<input type='submit' value='Create Apartment' />
				</form>

				{props.apartments ? loaded() : loading()}
			</div>
		);
}

export default Index;

import { useState } from "react"
import  React from "react"


import '../gallery.css';
import '../index.css';
import '../bootstrap.css';


function Show(props) {

  const id = props.match.params.id
  
  const apartments = props.apartments

  const apartment = apartments.find((p) => p._id === id)

  const [editForm, setEditForm] = useState(apartment);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...editForm,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateApartments(editForm, apartment._id)
    props.history.push("/")
  }

  // const removeApartment = () => {
  //   props.deleteApartments(apartment._id);
  //   props.history.push("/");
  // };

    return (


      <div className="apartment">
        <h1>Apt {apartment.unit}</h1>
        <h2>{apartment.description}</h2>


       {
         apartment.media && 
         <img src={apartment.media} alt="lol" />

         }

        
        

   <br />
   
   
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.unit}
          name="unit"
          placeholder="unit"
          onChange={handleChange}
          required
						textarea 
						className="form-control"
						aria-label="Large" 
        />
<br/>

        <input
          type="text"
          value={editForm.media}
          name="media"
          placeholder="media URL"
          onChange={handleChange}
          required
						textarea 
						className="form-control"
						aria-label="Large" 
        />
        <br/>

        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
          required
						textarea 
						className="form-control"
						aria-label="Large" 
        />
        <br/>

        <input type="submit" value="Update Apartment" />
        <br/>

      </form>
    </div>
  )
}

export default Show
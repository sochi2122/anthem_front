import { useState } from "react"

function Show(props) {
  const id = props.match.params.id
  const apartments = props.apartments

  const apartment = apartments.find((p) => p._id === id)

  // state for form
  const [editForm, setEditForm] = useState(apartment)

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...editForm,
      [event.target.unit]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateApartments(editForm, apartment._id)
    props.history.push("/")
  }

  const removeApartment = () => {
    props.deleteApartments(apartment._id);
    props.history.push("/");
  };

    return (
      <div className="apartment">
        <h1>{apartment.unit}</h1>
        <h2>{apartment.description}</h2>
        <img src={apartment.media} alt={apartment.unit} />
        <button id="delete" onClick={removeApartment}>
          DELETE
        </button>
   
   
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.unit}
          name="unit"
          placeholder="unit"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.media}
          name="media"
          placeholder="media URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Update Apartment" />
      </form>
    </div>
  )
}

export default Show
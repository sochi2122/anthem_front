import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


const Main = (props) => {

  const [apartments, setApartments] = useState(null)
    
  //const URL = "https://anthemapibackend.herokuapp.com/apartments"
    const URL  = "https://anthemapiproject3.herokuapp.com/apartments/"

    const getApartments = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log('getApartments - data', data);
        setApartments(data)
      }
    
      const createApartments = async (apartment) => {
        // make post request to create people
        await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json',
          },
          body: JSON.stringify(apartment),
        })
        // update list of people
        getApartments()
      }
    
      const updateApartments = async (apartment, id) => {
        // make put request to create people
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(apartment),
        })
        // update list of people
        getApartments()
      }
    
      const deleteApartments = async (id) => {
        // make delete request to create people
        await fetch(URL + id, {
          method: "DELETE",
        })
        // update list of people
        getApartments()
      }
    
      useEffect(() => getApartments(), [])
    
      return (
        <main>
          <Switch>
            <Route exact path="/">
              <Index apartments={apartments} createApartments={createApartments} />
            </Route>

            <Route
              path="/apartments/:id"
              render={(rp) => (
                <Show  {...rp}
                  apartments={apartments}
                  updateApartments={updateApartments}
                  deleteApartments={deleteApartments}
                 
                />

              )}/>

          </Switch>
        </main>
      )
    }
    
    


export default Main;
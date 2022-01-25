import React from 'react'
import '../index.css';
import {useState} from "react"
import Arr from '../components/Arr';
import '../gallery.css';
import '../index.css';
import '../bootstrap.css';




const Gallery = (props) => {




    
  
  const [selectedImage, setSelectedImage] = useState(Arr[0]);

  
  
  return (

    <container>

    
    <div className="App">
    <div className="wrapper">



   
    <div className="thumbnails">

{Arr.map((img, index) => (

  <img key={index} src={img} alt="thumb" className="thumb" 

  onClick= {() => setSelectedImage(img)}     />

))}



<img src={selectedImage} alt="big" className="big" />

</div>
</div>



  
</div>


 </container>


  );
}

  


     

export default Gallery;
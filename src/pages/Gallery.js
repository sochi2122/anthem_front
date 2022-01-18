import React from 'react'
import '../index.css';
import {useState} from "react"
import Arr from '../components/Arr';

const Gallery = (props) => {




    
  
  const [selectedImage, setSelectedImage] = useState(Arr[0]);



  
  
  return (
    
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


 


  );
}

  


     

export default Gallery;

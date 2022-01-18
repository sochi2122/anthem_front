import { render } from "@testing-library/react";
import React, {useState} from "react"


const ImageData = (props) => {


class MyComponent extends React.Component {
        constructor(props){
          super(props);
          this.state = {
            clicked : false
          }
        }


        imageClick = () => {
                console.log('Click!!!!');
                this.setState({
                  clicked: true
                })
              }       
            
              render () {
                return (
<>

<div id="wrapper">

<div className = "big">
                  
                    <img src={ this.props.url } onClick={this.imageClick} />
                    {
                      this.state.clicked &&
                      <div>You clicked me!</div>
                    }

                   
                  <img src={require('/myfolder/myimage.png')} onClick={() => imageClick()} alt="" />
                  </div>  </div>  

              </>

                 ) }
            }
            


            ReactDOM.render(<MyComponent url="http://www.libpng.org/https://images.unsplash.com/photo-1505884065216-0661d68e5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" />, document.body);






            

{/* //Using Array.map()loop over the data to create the small images based on the structure you decided */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}

}
  
        
export default ImageData;

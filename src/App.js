import React, { Component } from 'react';

import Image1 from './images/surf1.jpg';
import Image2 from './images/animal1.JPG';
import Image3 from './images/surface1.jpg';

class App extends Component {
 
  state = {
    name: "Surfing",
    description: "Surfing...",
    myPhoto : Image1,
    myPhotos: [
      {
        name: "Surfing",
        imageName: Image1,
        imagePath: './images/surf1.jpg',
        description: "Surfing...",
      },
      {
        name: "Animal",
        imageName: Image2,
        imagePath: './images/animal1.jpg',
        description: "Very wild but cute...",
      },
      {
        name: "Ocean",
        imageName: Image3,
        imagePath: './images/surface1.jpg',
        description: "Beautiful Water...",
      },
    ],
  };

  updateClick = () => {
    this.setState({
      name: "Animal",
      description: "Surfing...",
      myPhoto : Image2,
    });
  };

  restoreClick = () => {
    this.setState({
      name: "Surfing",
      description: "Surfing...",
      myPhoto : Image1,
    });
  };  
  
  render() {
    return (
      <div class="App">
        <h2>Image</h2>
        {this.state.myPhotos.map((item,index) => {
          return (
            <div>
              <h2>{item.name}</h2>
              <div> <img src={item.imageName} height={200} width={200}  /> </div>
            </div>
          );
        })};

        <h2>Profile</h2>
        <h3>{this.state.name}</h3>
        <img src={this.state.myPhoto} height={200} width={200}  />
        <div>
          <button onClick={this.updateClick}>Update</button>
          <button onClick={this.restoreClick}>Restore</button>
          </div>


      </div>
    );
  }
}

export default App;

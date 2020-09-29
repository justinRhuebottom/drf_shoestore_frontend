import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super (props);
    this.state = {
      shoe: [{brand_name: 'Nike', color: 'Black', fasten_type: 'Laces', manufacturer: 1, material: 'Leather', shoe_type: 1, size: 5}]
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then(res => res.json())
    .then(data => this.setState({shoe: data}))
  }
  
  render() {
    return (
      <div>
        {this.state.shoe.map(p => (
          <ul>
            <li>Brand : {p.brand_name}</li>
            <li>Color : 127.0.0.1:8000/api/shoecolor/{p.color}</li>
            <li>Fasten : {p.fasten_type}</li>
            <li>Manufacturer : 127.0.0.1:8000/api/manufacturer/{p.manufacturer}</li>
            <li>Material : {p.material}</li>
            <li>Type : 127.0.0.1:8000/api/shoetype/{p.shoe_type}</li>
            <li>Size : {p.size}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;

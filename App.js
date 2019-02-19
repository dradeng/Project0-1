import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props)
  	this.state = {price: 0}
  }
  async tick() {
    console.log('getting again')
    let response = await fetch("https://api.iextrading.com/1.0/stock/aapl/price")
  	let responseText = await response.text();
  	this.setState({
  	price: responseText
  	})
  }
  componentDidMount(){
	   this.timerID = setInterval( () => this.tick(), 1000)
  }
  componentWillUnmount(){
  	clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
        <p>Price is {this.state.price}</p>
      </div>
    );
  }
}

export default App;

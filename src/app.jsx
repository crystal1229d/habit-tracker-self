import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
      habits: [
          { id: 1, name: 'Reading', count: 0 },
          { id: 2, name: 'Running', count: 0 },
          { id: 3, name: 'Coding', count: 0 },
      ],
  };

  handleIncrement = (habit) => {
    console.log('increment');
  };

  handleDecrement = (habit) => {
    console.log('decrement');
  }

  handleDelete = (habit) => {
    console.log('delete');
  }


  render() {
    return (
      <>
        <Navbar />
        <Habits 
          habits={this.state.habits}
        />
      </>
    );
  }
}

export default App;
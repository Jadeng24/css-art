import React, { Component } from 'react';
import './App.css';
import router from './router.js';  
import Nav from './components/nav/nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className='app_router'>
        {router}
        </div>
      </div>
    );
  }
}

export default App;

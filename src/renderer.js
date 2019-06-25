// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/style.css';
import Login from  './components/login';

class App extends React.Component {
  render () {
    return (
      <Login />
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react';
import ReactDOM from 'react-dom';
import 'components/styles/style.css';
import Part from  'components/part';

class App extends React.Component {
  render () {
    return (
      <Part />
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));

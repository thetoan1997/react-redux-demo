import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Routes from './config/routes'

import store from './config/store'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Routes/>
        </div>
      </Provider>
    );
  }
  
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tick from './Tick.jsx';
import ProjectIndex from './ProjectIndex.jsx';
import ProjectEdit from './ProjectEdit.jsx';
import {Provider} from 'react-redux'
import UserIndex from './UserIndex.jsx';

import store from './config/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Tick />
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/netflix">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Project Index</Link>
                </li>
                <li>
                  <Link to="/users">User Index</Link>
                </li>
                <li>
                  <Link to="/projects/605/edit">Project Edit</Link>
                </li>
              </ul>

            </div>
            <Switch>
                <Route exact path="/projects"
                       component={ProjectIndex}/>
                <Route exact path="/users"
                       component={UserIndex}/>
                <Route exact path="/projects/:id/edit">
                  <ProjectEdit id={605}/>
                </Route>

                <Route exact path="/" component={ProjectIndex}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
  
}

export default App;

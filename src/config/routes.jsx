import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Tick from '../Tick.jsx';
import ProjectIndex from '../ProjectIndex.jsx';
import ProjectEdit from '../ProjectEdit.jsx';
import ProjectNew from '../ProjectNew/component.jsx'
import UserIndex from '../UserIndex.jsx';
import Layout from '../Layout/component.jsx';

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Layout>
						<Route exact path="/projects"
                       component={ProjectIndex}/>
            <Route exact path="/users"
                   component={UserIndex}/>
            <Route exact path="/projects/:id/edit"
              		 component={ProjectEdit}/>
            <Route exact path="/projects/new"
            			 component={ProjectNew}/>
					</Layout>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
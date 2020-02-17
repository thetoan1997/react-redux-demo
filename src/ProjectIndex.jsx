import React from 'react';
import {connect} from 'react-redux'
import getProjects from './actions/projects';

class ProjectIndex extends React.Component{
	constructor(props){
		super(props)
		this.state = {data: '', xxx: ''}
	}

  componentDidMount(){
    this.props.getProjects();
  }

  render(){
    return(
      <div>
        <h1>ProjectIndex</h1>
        <ProjectTable projects={this.props} />
      </div>
    );
  }
}

function ProjectTable(props){
	console.log('nananawa');
	// console.log(this.props);
	console.log(props);
	let projects = props.projects;

	if(projects.data.length === 0)
		return(
			<table align="center">
			</table>
		);

	return(
		<table align="center">
    	<thead>
      	<tr>
			    <th>ID</th>
			    <th>Name</th>
			  </tr>
		  </thead>
		  <tbody>
		  	{projects.data.map( project =>
		  		<tr key={project.id}>
				    <td>{project.id}</td>
				    <td>{project.name}</td>
				  </tr>
		  	)}
		  </tbody>
    </table>
	);
}

const mapStoreToProps = (store) => (
{
	data: store.projects.data
})

const mapDispatchToProps = {
	getProjects
}

const ProjectsIndex = connect(
	mapStoreToProps,
	mapDispatchToProps
)(ProjectIndex)

export default ProjectsIndex
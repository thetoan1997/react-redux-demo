import React from 'react';
import {connect} from 'react-redux'
import {getProjects} from './actions/projects';
import {Link} from 'react-router-dom'
import {
  Table,
  Button} from 'react-bootstrap'

class CProjectIndex extends React.Component{
	constructor(props){
		super(props)
		this.state = {data: '', note: ''}
	}

  componentDidMount(){
  	console.log("-----");
  	console.log(this);
    this.props.getProjects();
  }

  render(){
  	// debugger
    return(
      <div>
      	<Link to='projects/new'>
      		<Button>NEW PROJECT</Button>
      	</Link>
        <h1>Project List</h1>
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
	console.log(projects);
	console.log(projects.data.size);
	// debugger
	if(projects.data.length === 0 || projects.note !== 'after get projects')
		return(
			<table align="center">
			</table>
		);

	return(			
		<Table striped bordered hover className='fadeIn'>
    	<thead>
      	<tr>
			    <th>ID</th>
			    <th>Name</th>
			    <th>Actions</th>
			  </tr>
		  </thead>
		  <tbody>
		  	{console.log("historyyyyyy")}
		  	{console.log(props)}
		  	{projects.data.map( project =>
		  		<tr key={project.id}>
				    <td>{project.id}</td>
				    <td>{project.name}</td>
				    <td>
				    	{
				    		<Link to={`/projects/${project.id}/edit`}>
					        <i className="fas fa-edit mr-4"></i>
					      </Link>
				    	}
				    </td>
				  </tr>
		  	)}
		  </tbody>
    </Table>
	);
}

const mapStoreToProps = (store) => (
{
	data: store.projects.data,
	note: store.projects.note
})

const mapDispatchToProps = {
	getProjects
}

const ProjectIndex = connect(
	mapStoreToProps,
	mapDispatchToProps
)(CProjectIndex)

export default ProjectIndex
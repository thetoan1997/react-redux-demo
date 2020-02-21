import React from 'react'
import ProjectForm from '../ProjectForm.jsx'
import {createProject} from '../actions/projects';
import {connect} from 'react-redux'

class CProjectNew extends React.Component {
	onSubmit(project){
		console.log("in new")
		return this.props.createProject(project).then(success => {
			console.log(success)
		})
	}

	render(){
		return(
			<div>
				<h1>PROJECT NEW</h1>
				<ProjectForm 
					onSubmit={this.onSubmit.bind(this)}
					fromNew={true}/>
			</div>
		)
	}
}

const mapStoreToProps = (store) => ({
	data: store.projects.data,
	note: store.projects.note
})

const mapDispatchToProps = {
	createProject
}

const ProjectNew = connect(
	mapStoreToProps,
	mapDispatchToProps
)(CProjectNew)

export default ProjectNew
import React from 'react';
import { Formik } from 'formik';
import ProjectForm from './ProjectForm';
import {updateProject, 
        getProject} from './actions/projects';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'


class CProjectEdit extends React.Component{
	constructor(props){
		super(props)
		this.state = {project: {}, note: ''}
	}

  componentDidMount(){
    // debugger;
    console.log("mmmm");
    let prjId = this.props.match.params.id;
    console.log(prjId);
    this.props.getProject(prjId)
    .then(res => {
      console.log("BY GET PROJECT");
      console.log(res);
    })
  }

  static getDerivedStateFromProps(nextProps, state){
    let newState = {...state}
    // debugger
    nextProps.data && (newState.project = nextProps.data)
    newState.note = nextProps.note
    return newState
  }

  onSubmit(project){
    console.log("in on submit");
    console.log(project);
    console.log(this);
    return this.props.updateProject(project).then(success => {
      console.log(success);
    })
  }

  render(){
    if(this.props.data.length === 0)
      return(
        <div>
          <h1>Still Empty</h1>
        </div>
      );


    console.log('......v....');
    console.log(this);
    console.log(this.props.data);

    return(
      <div>
        <h1>PROJECT EDIT</h1>
        {console.log("llllllloo")}
        {console.log(this.state)}
        {
          this.state.note === 'after get project' ?
          <ProjectForm 
            onSubmit={this.onSubmit.bind(this)} 
            project={this.state.project}/> : 
          <p>loading</p>
        }
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  data: store.projects.data,
  note: store.projects.note
})

const mapDispatchToProps = {
  updateProject,
  getProject
}

const ProjectEdit = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CProjectEdit)

export default ProjectEdit
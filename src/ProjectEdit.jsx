import React from 'react';
import { Formik } from 'formik';

class ProjectEdit extends React.Component{
	constructor(props){
		super(props)
		this.state = {data: '', id: props.id}
	}

  componentDidMount(){
    console.log("mmmm");
    console.log(this);
    console.log(this.state);
		window.axios.get(`projects/${this.state.id}`)
	  .then(response => {
	  	const data = response.data;
	  	this.setState({
	  		data: data
	  	});
	  })
  }

  handleSubmit(){
  	debugger;
		alert('XXX');
	}

  render(){
    return(
      <div>
        <h1>Project Edit</h1>
        <ProjectForm project={this.state} />
      </div>
    );
  }
}

function ProjectForm(props){
	console.log('edit');
	let project = props.project.data;
	if(project.length === 0)
		return(
			<div></div>
		);

	return(
		<Formik
			initialValues={{ name: project.name}}
      onSubmit={(values, actions) => {
      	project.name = values.name;
      	window.axios.put(`projects/${project.id}`, {project: project})
			  .then(response => {
			  	if(response.status === 200)
			  		console.log("OKKK");
			  })
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   actions.setSubmitting(false);
        // }, 1000);
      }}
		>
			{props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
		</Formik>
	);
}

// const mapStoreToProps = (store) => ({
//   data: store.projects.data
// })

// const mapDispatchToProps = {
//   updateProject
// }

// const ProjectEdit = connect(
//   null,
//   mapDispatchToProps
// )(ProjectEdit)

export default ProjectEdit
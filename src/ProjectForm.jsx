import React from 'react';
import {Formik} from 'formik';
import {
  Form,
  Row,
  Col} from 'react-bootstrap'
// import LaddaButton from '../LaddaButton/component'


class ProjectForm extends React.Component{
  constructor(props){
    super(props)
    // this.form = React.createRef();
  }
  
	privateForm = formikProps => {
		let {handleSubmit,
				 handleChange,
				 errors,
				 values} = {...formikProps}
		console.log("valuesssss");
		console.log(values);

		return <Form
      noValidate
      className='fadeIn'
      onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="prjform-name">
        <Form.Label column sm={2}>Name of project</Form.Label>
        <Col sm={10}>
          <Form.Control
            // readOnly={isSubmitting}
            isInvalid={!!errors.name}
            autoFocus
            onChange={handleChange}
            defaultValue={values.name}
            name='name'
            type="text"
            placeholder='name placeholder' />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <button
            type='submit'
          >SUBMIT</button>
        </Col>
      </Form.Group>
    </Form>
	}

	onSubmit(project){
		this.props.onSubmit(project).then(success => {
			console.log('submit successfully!');
		})
		.catch(error => {
      console.log('submit failed!');
    })
	}

	render(){
		return <Formik
		  // ref={this.form}
			component={this.privateForm}
			onSubmit={this.onSubmit.bind(this)}
			initialValues={{name: ''}}/>
	}
}

export default ProjectForm

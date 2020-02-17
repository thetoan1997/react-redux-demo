export const PROJECT_ACTIONS = {
	GET_PROJECTS: 'GET_PROJECTS',
	UPDATE_PROJECT: 'UPDATE_PROJECT',
	CREATE_PROJECT: 'CREATE_PROJECT',
	DELETE_PROJECT: 'DELETE_PROJECT'
}

export const getProjects = () => {
	return (dispatch) => {
		return window.axios.get('https://nus-react-demo-backend.herokuapp.com/v1/projects')
    .then(response => {
    	const data = response.data;
    	// this.setState({
    	// 	data: x,
    	// 	xxx: "hahahaha"
    	// });
    	return dispatch({
    		type: PROJECT_ACTIONS.GET_PROJECTS,
				payload: {data: data, xxx: "get xxx"}	
    	})
    })
    .catch(error => {
      return false
    })
	}
}

export const updateProject = (new_data) => {
	console.log("2222");
	return {
		type: PROJECT_ACTIONS.UPDATE_PROJECT,
		payload: {data: new_data, xxx: "update xxx"}		
	}
}
export default getProjects
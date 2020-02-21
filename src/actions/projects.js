export const PROJECT_ACTIONS = {
	GET_PROJECT: 'GET_PROJECT',
	GET_PROJECTS: 'GET_PROJECTS',
	UPDATE_PROJECT: 'UPDATE_PROJECT',
	CREATE_PROJECT: 'CREATE_PROJECT',
	DELETE_PROJECT: 'DELETE_PROJECT'
}

export const getProjects = () => {
	return (dispatch) => {
		return window.axios.get('/projects')
    .then(response => {
    	const data = response.data;
    	return dispatch({
    		type: PROJECT_ACTIONS.GET_PROJECTS,
				payload: {data: data, note: "get projects"}	
    	})
    })
    .catch(error => {
      return false
    })
	}
}

export const getProject = (prjId) => {
	return (dispatch) => {
		return window.axios.get(`/projects/${prjId}`)
    .then(response => {
    	const data = response.data;
    	return dispatch({
    		type: PROJECT_ACTIONS.GET_PROJECT,
				payload: {project: data, note: 'get project'}	
    	})
    })
    .catch(error => {
      return false
    })
	}
}

export const updateProject = (project) => {
	return (dispatch) => {
		return window.axios.put(`projects/${project.id}`, {project: project})
	  .then(response => {
	  	if(response.status === 200)
	  		console.log("OKKK");
		  	return dispatch({
					type: PROJECT_ACTIONS.UPDATE_PROJECT,
					payload: {data: project, note: "update project"}		
				})
	  })
	  .catch(error => {
      return false
    })
	}
}

export const createProject = (project) => {
	return (dispatch) => {
		return window.axios.post(`/projects`, {name: project.name})
		.then(response => {
			if(response.status === 201)
				console.log(`Created ${project.name} successfully`)
				return dispatch({
					type: PROJECT_ACTIONS.CREATE_PROJECT,
					payload: {data: project.name, note: "create project"}
				})
		})
		.catch(error => {
      return false
    })
	}
}

export const deleteProject = (project) => {
	return (dispatch) => {
		return window.axios.delete(`projects/${project.id}`)
		.then(response => {
			if(response.status === 200)
				console.log(`Removed ${project.name} successfully`)
				return dispatch({
					type: PROJECT_ACTIONS.DELETE_PROJECT,
					payload: {data: project.id, note: "delete project"}
				})
		})
		.catch(error => {
			return false
		})
	}
}

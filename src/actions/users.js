export const USER_ACTIONS = {
	GET_USERS: 'GET_USERS',
	UPDATE_USER: 'UPDATE_USER',
	CREATE_USER: 'CREATE_USER',
	DELETE_USER: 'DELETE_USER'
}

export const getUsers = (response) => {
	return (dispatch) => {
		return window.axios.get('/users')
    .then(response => {
    	const data = response.data;

    	return dispatch({
    		type: USER_ACTIONS.GET_USERS,
				payload: {data: data, xxx: "get xxx"}	
    	})
    })
    .catch(error => {
      return false
    })
	}
}

export const updateUser = (new_data) => {
	console.log("2222");
	return {
		type: USER_ACTIONS.UPDATE_USER,
		payload: {data: new_data, xxx: "update xxx"}		
	}
}
export default getUsers
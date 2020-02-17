import React from 'react';
import {connect} from 'react-redux'
import getUsers from './actions/users';


class UserIndex extends React.Component{
	constructor(props){
		super(props)
		this.state = {data: '', xxx: ''}
	}

  componentDidMount(){
    this.props.getUsers();
  }

  render(){
    return(
      <div>
        <h1>UserIndex</h1>
        <UserTable users={this.props} />
      </div>
    );
  }
}

function UserTable(props){
	let users = props.users;

	if(users.data.length === 0)
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
		  	{users.data.map( user =>
		  		<tr key={user.id}>
				    <td>{user.id}</td>
				    <td>{user.email}</td>
				  </tr>
		  	)}
		  </tbody>
    </table>
	);
}

const mapStoreToProps = (store) => (
{
  data: store.users.data
})

const mapDispatchToProps = {
  getUsers
}

const UsersIndex = connect(
  mapStoreToProps,
  mapDispatchToProps
)(UserIndex)


export default UsersIndex
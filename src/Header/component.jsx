import React from 'react'
import {
  Button,
  Navbar,
  Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import Tick from '../Tick.jsx';

class Header extends React.Component {
	render(){
		return(
			<Navbar bg="dark" variant="dark" expand="lg" className='header'>
			<Nav className="mr-auto">
	      <Navbar.Text className='mr-3'>
	        <NavLink
	          to='/projects'
	          activeClassName="choosen">
	          PROJECTS
	        </NavLink>
	      </Navbar.Text>
	      <Navbar.Text className='mr-3'>
	        <NavLink
	          to='/users'
	          activeClassName="choosen">
	          USERS
	        </NavLink>
	      </Navbar.Text>
	      <Navbar className='mr-sm-1'>
					<Tick />
				</Navbar>
	    </Nav>
	    </Navbar>
		)
	}
}

export default Header
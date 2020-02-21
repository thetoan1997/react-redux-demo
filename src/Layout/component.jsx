import React from 'react'
import Header from '../Header/component.jsx';

class Layout extends React.Component {
	render(){
		return(
			<div>
				{console.log("Layoutttttt")}
				{console.log(this.props)}
				<Header />
		    <div className='container main-content'>
		    	{this.props.children}
		    </div>
			</div>
		)
	}
}

export default Layout
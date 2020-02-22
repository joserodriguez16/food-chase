import React from 'react';
import './Navegation.css'

const Navegation = ({isSignInChange,isSignedIn,onRouteChange}) => {
	const onSignOutClick = () => {
		onRouteChange('signin')
		isSignInChange()
	}

	if (isSignedIn){
		return(
			<nav className="navbar navbar-expand-lg navbar-light mybg">
				<p onClick ={()=>onRouteChange('landing')}className="f4 navbar-nav mr-auto nav-item active dim pointer">Food Chase</p>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			   	 <span className="navbar-toggler-icon"></span>
			    </button>
				  <div className="collapse navbar-collapse" id="navbarText">
				    <ul className="f4 mt3 navbar-nav mr-auto">
				      <li className="nav-item active dim">
				        <p onClick ={()=>onRouteChange('postameal')}className="nav-link pointer">| Post A Meal</p>
				      </li>
				      <li className="nav-item active dim">
				        <p onClick ={()=>onRouteChange('mealposts')} className="nav-link pointer">| Meal Posts |</p>
				      </li>
				      <li className="nav-item active dim">
				        <p onClick ={()=>onRouteChange('postedbyme')} className="nav-link pointer">Posted by Me |</p>
				      </li>
				      <li className="nav-item active dim">
				        <p onClick ={()=>onRouteChange('reserved')} className="nav-link pointer">Reserved</p>
				      </li>
				    </ul>
				    <span className="navbar-text">
				    	<button onClick ={onSignOutClick} className='  br2 pa2 link dim black ma1 pointer'> SignOut</button>

				    </span>
				  </div>
			</nav>
		);	
	} else {
		return(
			<nav className="navbar navbar-expand-lg navbar-light mybg">
				<p onClick ={()=>onRouteChange('landing')}className="f3 navbar-nav mr-auto nav-item active dim pointer ">Food Chase</p>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			   	 <span className="navbar-toggler-icon"></span>
			    </button>
				  <div className="collapse navbar-collapse" id="navbarText">
				    <ul className="f4 mt3 navbar-nav mr-auto">
				    </ul>
				    <span className="navbar-text">
				    	<button onClick ={()=>onRouteChange('register')} className='  br2 pa2 link dim black ma1 pointer'> Register</button>
						<button onClick ={()=>onRouteChange('signin')}className='  br2 pa2 link dim black ma1 pointer'> Sign in</button>
				      
				    </span>
				  </div>
			</nav>
		);
	}

	
}
export default Navegation;

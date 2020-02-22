import React from 'react';

class Signin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			emailChange:'',
			passwordChange:''
		}
	}

	onEmailChange = (event) => {
		this.setState({emailChange: event.target.value})

	}

	onPasswordChange = (event) => {
		this.setState({passwordChange: event.target.value})

	}

	// onClickSubmit = () => {
	// 	this.props.onRouteChange('mealposts')
	// 	this.props.isSignInChange()
	// }


	onClickSubmit = (event) => {
		fetch(('http://localhost:3000/signin'),{
			method:'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				email:this.state.emailChange,
				password:this.state.passwordChange
			})

		}).then(response=> response.json())
		.then(user => {
			if(user.email.length > 0 && 
		 		user.name.length > 0 &&
		 		user.lastname.length > 0){
				this.props.loadUser(user)
				this.props.onRouteChange('mealposts')
				this.props.isSignInChange()
			}
		})
		
		// console.log(this.state)
	}



	render() {
		// const {onRouteChange, isSignInChange} = this.props;

		return( 	
			<article className="mybg br3 ba shadow-5 b--black-10 mv4 w-90 w-50-m w-100-l mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input onChange ={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="email" name="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange ={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="password" name="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick = {this.onClickSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick = {() => this.props.onRouteChange('register')} className="pointer f6 link dim black db">Register</p>
				    </div>
				  </div>
				</main>
			</article>
		);
	}
} 
// ({onRouteChange}) => {	
export default Signin;

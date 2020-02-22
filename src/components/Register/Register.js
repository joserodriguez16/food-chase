import React from 'react';

class Register extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			emailChange:'',
			passwordChange:'',
			nameChange: '',
			lastname: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({emailChange: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({passwordChange: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({nameChange:event.target.value})
	}
	onLastNameChange = (event) => {
		this.setState({lastname:event.target.value})
	}

	// onClickSubmit = () => {
	// 	this.props.onRouteChange('mealposts')
	// 	this.props.isSignInChange()
	// }

	onClickChange = () => {
		let objToSend = {
				name: this.state.nameChange,
				lastname:this.state.lastname,
				password: this.state.passwordChange,
				email: this.state.emailChange
		}

		fetch('http://localhost:3000/register', {
			method:'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify(objToSend)
		})
		.then(response => response.json())
		.then(user => {
		 	if(user.email.length > 0 && 
		 		objToSend.password.length > 0 &&
		 		user.name.length > 0 &&
		 		user.lastname.length > 0){
		 		this.props.onRouteChange('mealposts')
				this.props.isSignInChange()
				this.props.loadUser(objToSend)
		 	}
		})
		.catch(err => console.log('all fields must be fill'))

	}


	render() {

		return(
			<article className="mybg br2 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				      	<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input onChange = {this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="name"/>
				        <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
				        <input onChange = {this.onLastNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="lastname"/>
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black  w-100" type="email" name="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange = {this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="password" name="password"/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick = {this.onClickChange} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default Register;
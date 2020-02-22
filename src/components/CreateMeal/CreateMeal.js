import React from 'react';
import {storage} from '../firebase'
import './CreateMeal.css'


class CreateMeal extends React.Component {
	constructor(props){
		super(props)
		// this.handleChange = this.handleChange.bind(this);
		this.state = {
			image: null,
			url: '',
			plateName: '',
			platePrice: '',
			pickUpAdress:'',
			plateDescription: ''
		}
	}

	handleChange = (event) => {
		if(event.target.files[0]){
			this.setState({image:event.target.files[0]})


		}
	}
	handleUpload = () => {
		const {image} = this.state;
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on('state_changed',
			(snapshot) => {
 			//progress  

			}, 
			(error) => {
			//errors 
				console.log(error)

			}, 
			() => {
			// complete
				storage.ref('images').child(image.name).getDownloadURL().then(url => {
				this.setState({url})
			})

			})
	}
	getPlateName = (event)=> {
		this.setState({plateName: event.target.value})
	}

	getPlateDescription = (event)=> {
		this.setState({plateDescription: event.target.value})
	}

	getPlatePrice = (event)=> {
		this.setState({platePrice: event.target.value})
	}

	getPickUpAdress = (event)=> {
		this.setState({pickUpAdress: event.target.value})
	}

	addPlate = () => {
		if(this.state.image !== null &&
			this.state.platePrice < 11 &&
			this.state.plateDescription.length > 7 &&
			this.state.plateName.length > 5){

			fetch('http://localhost:3000/post-a-meal', {
			method:'POST',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				platename: this.state.plateName,
				price:this.state.platePrice,
				description:this.state.plateDescription,
				image:this.state.url,
				email:this.props.userEmail
				})
			})
			this.props.onRouteChange('mealposts')
			this.props.updateMealPost()
		}
	}


	render() {
		
		return(
			<div className = 'mybg shadow-5 center-2 br3 w-50-s w-70-m w-70-l'>
				<div className ='tc pa3 ma3'>
					<input className='pointer' onChange = {this.handleChange}type = 'file' />
					<button className='f6 link dim ba bw1 ph3 pv2 mb2 dib br3 black' onClick = {this.handleUpload}>Upload</button>
					
	
				</div>
				<div className=''>
					<img className ='br3' width ='350px' height='150px' src = {this.state.url || 'https://via.placeholder.com/350x150'} alt='plate img' />
				</div>
				<div className='center'>
					<label className="db fw6 lh-copy f6" htmlFor="password">Pick Up Adress</label>
				    <input onChange = {this.getPlateDescription} placeholder = 'Ex: 320 E Gun Hill Bronx NY 10467'className=" pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" />
					<label className="db fw6 lh-copy f6" htmlFor="password">Plate Name</label>
				    <input onChange = {this.getPlateName} placeholder = 'Ex: Rice and beans with chicken'className=" pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" />
				    <label className="db fw6 lh-copy f6" htmlFor="password">Plate Description</label>
				    <input onChange = {this.getPickUpAdress} placeholder = 'Ex: fried chicken black beans yellow rice(Optional)'className=" pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" />
				    <label className="db fw6 lh-copy f6" htmlFor="password">Plate Price</label>
				    <input onChange = {this.getPlatePrice} placeholder = 'In $ Max price is $10'className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="number" min="1.00" step="0.50" max="10.00" />
				</div>
				<div className = 'tc'>
					<button className='f6 link dim ba bw1 ph3 pv2 mb2 dib br3 black' onClick = {this.addPlate}>Add Plate</button>
				</div>
			</div>

		);
	}
}

export default CreateMeal;
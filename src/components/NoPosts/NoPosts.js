import React from 'react';
import './NoPost.css'

const NoPosts = ({route}) => {
	if (route === 'mealposts'){
		return(
			<div className ='mt4 pa5 br3 bgwhite center text '>
				<div className='imgct'>
					<img width='150px'
					height='auto'
					alt ='Sad emoji' 
					src ='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4b9.png'/>
				</div>
				<div className='f4 tc'>
					<span>No meal post at the moment</span>
					<br/>
					<span>You can create your own</span>
					<br/>
					<span>In the Post a meal section</span>
				</div>

			</div>
		)
	}
	else if(route === 'postedbyme'){
		return(
			<div className ='mt4 pa5 br3 bgwhite center text '>
				<div className='imgct'>
					<img width='150px'
					height='auto'
					alt ='Sad emoji' 
					src ='http://www.pngmart.com/files/1/Emoji-Face-Transparent-Background.png'/>
				</div>
				<div className='f4 tc'>
					<span>You have not post anything yet</span>
					<br/>
					<span>You can post a meal</span>
					<br/>
					<span>In the Post a meal section</span>
				</div>

			</div>
		)


	}
	else {
		return(
			<div className ='mt4 pa5 br3 bgwhite center text '>
				<div className='imgct'>
					<img width='150px'
					height='auto'
					alt ='Sad emoji' 
					src ='https://www.freepngimg.com/thumb/emoji_face/37015-5-emoji-face-image.png'/>
				</div>
				<div className='f4 tc'>
					<span>You have not reserve anything yet</span>
					<br/>
					<span>You can reserve a meal</span>
					<br/>
					<span>In the Meal Posts section</span>
				</div>

			</div>
		)

	}

}
export default NoPosts;
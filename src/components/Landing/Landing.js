import React from 'react';
import './Landing.css';

const Landing = () => {
	return(
		<div>
			<div className = 'imgct'>
				<img alt='food-waste' 
				src='https://swagoz.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-27-at-8.25.08-pm.png'
				width = '700px'
				height = 'auto'/>

			</div>
			<div className= 'text mt3 br3 bgwhite f4 center'>
				<span className = 'b'>According to USDA's Economic Research Service food waste is estimated at between 30 - 40 percent of the food supply.</span>
				<ul>
					<li>
						31% is approximately 133 billion pounds and 161 billion dollars worth of food
					</li>
					<li>
						The Great Wall of China Weighs ~116 billion pounds
					</li>
				</ul>
				<span className = 'b'>Restaurant food waste amounts to 2 billion in lost profits.</span>
				<br/>
				<span className = 'b'>We want to:</span>
				<ul>
					<li>
						Reduce food waste
					</li>
					<li>
						Decrease restaurant profit loss 
					</li>
					<li>
						Connect people with amazing meals for an affordable price
					</li>
				</ul>
			</div>
		</div>
	)

}
export default Landing;
import React from 'react';
import './PostCard.css';

const PostCard = ({onReserveClick, Name, price, url, description, route}) => {
	
	if (route === 'mealposts'){
		return(
			<div>
				<article className=" mybg shadow-5 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l mw10 center">
					  <img src={url} className="db w-100 br2 br--top" alt=""/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f5 mv0">{Name}</h1>
					      </div>
					      <div className="dtc tr">
					        <h2 className="f5 mv0">{`$${price}`}</h2>
					      </div>
					    </div>
					    {<p className="f6 lh-copy measure mt2 mid-gray">
					      {description}
					    </p>}
					  </div>
					<div className= ' pb2 mb2 tc grow pointer b--black-10'>
						<span onClick = {onReserveClick} >Reserve</span>
					</div>
				</article>
			</div>
		)

	} 
	else if (route === 'reserved'){
		return(
			<div>
				<article className=" mybg shadow-5 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l mw10 center">
					  <img src={url} className="db w-100 br2 br--top" alt=""/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f5 mv0">{Name}</h1>
					      </div>
					      <div className="dtc tr">
					        <h2 className="f5 mv0">{`$${price}`}</h2>
					      </div>
					    </div>
					    {<p className="f6 lh-copy measure mt2 mid-gray">
					      {description}
					    </p>}
					  </div>
					<div className= ' pb2 mb2 tc grow pointer b--black-10'>
						<span onClick = {onReserveClick} >Complete</span>
					</div>
				</article>
			</div>
		)

	} else {
		return(
			<div>
				<article className="mybg shadow-5 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l mw10 center">
					  <img src={url} className="db w-100 br2 br--top" alt=""/>
					  <div className="pa2 ph3-ns pb3-ns">
					    <div className="dt w-100 mt1">
					      <div className="dtc">
					        <h1 className="f5 mv0">{Name}</h1>
					      </div>
					      <div className="dtc tr">
					        <h2 className="f5 mv0">{`$${price}`}</h2>
					      </div>
					    </div>
					    {<p className="f6 lh-copy measure mt2 mid-gray">
					      {description}
					    </p>}
					  </div>
					<div className= ' pb2 mb2 tc grow pointer b--black-10'>
						<span onClick = {onReserveClick} >Remove</span>
					</div>
				</article>
			</div>
		)
	}



}
export default PostCard;


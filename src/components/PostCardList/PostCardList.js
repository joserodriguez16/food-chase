import React from 'react';
import PostCard from '../PostCard/PostCard';

// import './PostCardList.css';

const PostCardList = ({route,reservePlate,cards}) => {
	const allCards = cards.map((card,i) => {
		return(
			<PostCard 
			route = {route}
			onReserveClick = {()=>reservePlate(i)}
			key ={i}
			Name = {cards[i].platename}
			price = {cards[i].price}
			description = {cards[i].description}
			url = {cards[i].image}
			/>
		)
	})
	
	
	return(
		<div>

			{allCards}
			
		</div>
			
	)

}
export default PostCardList;
// {`https://robohash.org/${card.id}`}
// <div style = {{marginTop:'100px'}}>



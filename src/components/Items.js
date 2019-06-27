import React, { useState, useEffect } from 'react';
import firebase from '../firebase.js';
import spinner from './spinner.gif';

const Item = ({ data, removeItem }) => (
	<React.Fragment>
		<h3>{data.title}</h3>
		<p>brought by: <strong>{data.name}</strong></p>
		<button onClick={() => removeItem(data.id)}>Remove Item</button>
	</React.Fragment>
)

const Spinner = () => (
	<div style={{margin: "auto", align:"center"}}>
		<img
			src={spinner}
			width="200px"
			alt=""
		/>
	</div>
)

export default ({ removeItem }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const itemsRef = firebase.database().ref("items");
		itemsRef.on("value", (snapshot) => {
			let items = snapshot.val();
			let newState = [];
			for(let item in items) {
				newState.push({
					id: item,
					title: items[item].title,
					name: items[item].name
				});
			}
			setItems(newState);
		});
	}, [items]);

	return (
		<ul>
			{items.length ? items.map(item => (
				<li key={item.id}>
					<Item data={item} removeItem={removeItem} />
				</li>
			)) : <Spinner />}
		</ul>
	)
}

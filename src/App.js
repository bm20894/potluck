import React from 'react';
import AddItem from './components/AddItem';
import Items from './components/Items';
import './App.css';
import firebase from './firebase.js';

export default () => {

	const onSubmit = (item) => {
		const itemsRef = firebase.database().ref("items");
		itemsRef.push(item);
	}

	const removeItem = (id) => {
		const itemRef = firebase.database().ref(`items/${id}`);
		itemRef.remove();
	}

	return (
		<div className="app">
			<header>
				<div className="wrapper">
					<h1>Potluck App</h1>
				</div>
			</header>

			<div className="container">
				<AddItem onSubmit={onSubmit} />
				<section className="display-item">
					<div className="wrapper">
						<Items removeItem={removeItem} />
					</div>
				</section>
			</div>

		</div>
	)
}

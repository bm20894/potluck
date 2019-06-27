import React, { useState } from 'react';

export default ({ onSubmit }) => {
	const [item, setItem] = useState({ name: "", currentItem: "" });

	const onChange = (e) => {
		setItem({...item, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e, data) => {
		e.preventDefault();
		if (data.name.length && data.currentItem.length) {
			onSubmit({ name: data.name, title: data.currentItem });
			setItem({ name: "", currentItem: ""});
		}
	}

	return (
			<section className="add-item">
				<form onSubmit={e => handleSubmit(e, item)}>
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						value={item.name}
						onChange={onChange}
					/>
					<input
						type="text"
						name="currentItem"
						placeholder="What are you bringing?"
						value={item.currentItem}
						onChange={onChange}
					/>
					<button>Add Item</button>
				</form>
			</section>
	)
}

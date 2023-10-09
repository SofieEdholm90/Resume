import React, { useState } from 'react'
import './list.css'
import CloseIcon from '@mui/icons-material/Close'
import Paper from '@mui/material/Paper'
import { purple } from '@mui/material/colors'

const centerContentStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	//backgroundImage: `url(${require('./assets/bild.jpg')})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center', // Placera bilden i mitten av bakgrunden
	backgroundRepeat: 'no-repeat', // Undvik upprepning av bakgrundsbilden
}

function List() {
	const [newItem, setNewItem] = useState('')
	const [items, setItems] = useState([])

	function addItem() {
		const item = {
			id: Math.floor(Math.random() * 1000),
			text: newItem,
		}
		setItems((oldList) => [...oldList, item])
		setNewItem('')
	}

	function deleteItem(id) {
		const newArray = items.filter((item) => item.id !== id)
		setItems(newArray)
	}

	return (
		<div style={centerContentStyle}>
			<Paper
				elevation={3}
				sx={{
					padding: '5rem',
					flexDirection: 'column',
					backgroundColor: purple['600'],
				}}
			>
				<h1>To Do List</h1>
				<input
					type='text'
					placeholder='Add an item...'
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>

				<button className='add-button' onClick={() => addItem()}>
					Add
				</button>

				<ul>
					{items.map((item) => {
						return (
							<li key={item.id}>
								{item.text}

								<CloseIcon
									title='Delete'
									color='red'
									onClick={() => deleteItem(item.id)}
									sx={{
										color: 'red',
										cursor: 'pointer',
									}}
								/>
							</li>
						)
					})}
				</ul>
			</Paper>
		</div>
	)
}

export default List

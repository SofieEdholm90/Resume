import React, { useState } from 'react'
import './list.css'
import { Paper, Button, TextField, Typography, ListItem, IconButton, ListItemText, List } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
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

function ListPage() {
	const [newItem, setNewItem] = useState('')
	const [items, setItems] = useState([])

	function addItem() {

		if (newItem.length < 1) {
			alert('du måste skriva en text')
			return
		}

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
					p: 6,
					pt: 2,
					flexDirection: 'column',
				}}
			>
				<Typography align={'center'} variant="h4" sx={{
					mb: 2
				}}>
					To Do List
				</Typography>
				<TextField autoComplete='off' id="outlined-basic" label="Add an item..." variant="outlined" value={newItem} onChange={(e) => setNewItem(e.target.value)} />


				<Button sx={{
					marginLeft: 2,
					mt: 1
				}} variant="contained" onClick={() => addItem()}>
					Add
				</Button>

			</Paper>

			{items.length > 0 && (
				<Paper elevation={3}
					sx={{
						p: 1,
						pt: 2,
						flexDirection: 'column',
						mt: 4,
						minWidth: 400
					}}>
					<List sx={{
						width: '100%'
					}}>
						{items.map((item) => {
							return (
								<ListItem
									key={item.id}
									secondaryAction={
										<IconButton edge="end" aria-label="delete">
											<DeleteIcon onClick={() => deleteItem(item.id)} />
										</IconButton>
									}
								>
									<ListItemText
										primary={item.text}
									/>
								</ListItem>
							)
						})}
					</List>
				</Paper>
			)}


		</div>
	)
}

export default ListPage

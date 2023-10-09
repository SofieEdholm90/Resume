import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function SimplePaper() {
	const navigate = useNavigate()
	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')

	const handleLogin = () => {
		// Validera inloggningsuppgifterna
		if (username === 'admin' && password === 'password') {
			navigate('/') // Navigera till rotvägen efter inloggning
		} else {
			alert('Fel användarnamn eller lösenord!')
		}
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				backgroundImage: `url(${require('./assets/bild.jpg')})`,
				backgroundSize: 'cover',
			}}
		>
			<Paper
				elevation={3}
				sx={{
					padding: '1rem',
					width: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
				}}
			>
				<TextField
					label='Användarnamn'
					variant='outlined'
					margin='normal'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					label='Lösenord'
					variant='outlined'
					type='password'
					margin='normal'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant='contained' color='primary' onClick={handleLogin}>
					Logga in
				</Button>
			</Paper>
		</Box>
	)
}

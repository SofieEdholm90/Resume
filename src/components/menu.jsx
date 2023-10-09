import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function PositionedMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box>
			<Button
				id='demo-positioned-button'
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{
					color: 'black',
					fontSize: '18px',
					borderRadius: '5px',
					padding: '30px 30px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				Meny
			</Button>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<MenuItem
					sx={{
						color: 'black',
						fontSize: '20px',
					}}
					component={Link}
					to='/list'
					onClick={handleClose}
				>
					Lista
				</MenuItem>

				<MenuItem
					sx={{
						color: 'black',
						fontSize: '20px',
					}}
					onClick={handleClose}
				>
					Mitt konto
				</MenuItem>
				<MenuItem
					sx={{
						color: 'black',
						fontSize: '20px',
					}}
					onClick={handleClose}
				>
					Logga ut
				</MenuItem>
			</Menu>
		</Box>
	)
}

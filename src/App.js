import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/menu'
import ImageList from './components/imageList'
import Button from './components/button'
import BottomNavigation from './components/bottomNavigation'
import List from './components/list'
import Login from './components/login'

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Menu />
				<Routes>
					<Route path='/' element={<ImageList />} />
					<Route path='/list' element={<List />} />
					<Route path='/login' element={<Login />} />{' '}
					{/* Inkludera Login-komponenten här */}
				</Routes>
				<Routes>
					<Route path='/' element={<Button />} />
					<Route path='/list' element={null} />
					<Route path='/login' element={null} />
				</Routes>
				<Routes>
					<Route path='/' element={<BottomNavigation />} />
					<Route path='/list' element={null} />
					<Route path='/login' element={null} />
				</Routes>
			</div>
		</Router>
	)
}

export default App

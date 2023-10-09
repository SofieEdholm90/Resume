import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavigation from './components/navigation/topbar'
import ImageList from './components/imageList'
import BottomNavigation from './components/bottomNavigation'
import List from './components/list'
import Login from './components/login'
const App = () => {


	return (
		<Router>
			<div className='App'>
				{window.location.pathname !== '/' && (
					<TopNavigation />
				)}
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/list' element={<List />} />
					<Route path='/login' element={<ImageList />} />{' '}
					{/* Inkludera Login-komponenten här */}
				</Routes>
				<Routes>
					<Route path='/list' element={null} />
					<Route path='/login' element={null} />
				</Routes>
				<Routes>
					{window.location.pathname !== '/' && (
						<Route path='/' element={<BottomNavigation />} />
					)}

					<Route path='/list' element={null} />
					<Route path='/login' element={null} />
				</Routes>
			</div>
		</Router>
	)
}

export default App

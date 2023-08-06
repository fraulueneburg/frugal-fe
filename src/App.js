import './main.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
// import PrivatePage from './pages/WrapperPrivatePage'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Budget from './pages/Budget'
import Goals from './pages/Goals'
import Settings from './pages/Settings'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/auth/signup" element={<Signup />}></Route>
					<Route path="/budget" element={<Budget />}></Route>
					<Route path="/goals" element={<Goals />}></Route>
					<Route path="/settings" element={<Settings />}></Route>
					<Route path="/settings/budget" element={<Settings subpage={'budget'} />}></Route>
					<Route path="/settings/user" element={<Settings subpage={'user'} />}></Route>
					<Route path="/settings/categories" element={<Settings subpage={'categories'} />}></Route>
					{/* <Route
						path="/auth/profile"
						element={
							<PrivatePage>
								<ProfilePage />
							</PrivatePage>
						}
					/>*/}
				</Route>
			</Routes>
		</>
	)
}

export default App

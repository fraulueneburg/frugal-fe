import './main.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/WrapperLayout'
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
					{/* <Route
						path="/auth/profile"
						element={
							<PrivatePage>
								<ProfilePage />
							</PrivatePage>
						}
					/>
					<Route
						path="/budget"
						element={
							<PrivatePage>
								<BudgetOverview />
							</PrivatePage>
						}
					/>
					<Route
						path="/budget/settings"
						element={
							<PrivatePage>
								<BudgetSettings />
							</PrivatePage>
						}
					/> */}
				</Route>
			</Routes>
		</>
	)
}

export default App

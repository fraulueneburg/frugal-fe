import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout() {
	return (
		<>
			<header>
				<Link className="logo" to="/">
					🐽
				</Link>
				<Navbar />
				<div>Logged in as: Manfred</div>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout

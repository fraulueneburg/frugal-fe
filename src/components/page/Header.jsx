import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<>
			<header>
				<Link className="logo" to="/">
					<span className="icon">🐽</span>
					<span className="name">frugal</span>
				</Link>
				<Navbar />
				<div>Logged in as: Manfred</div>
			</header>
		</>
	)
}

export default Header

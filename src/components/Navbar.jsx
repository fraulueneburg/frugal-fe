import { AuthContext } from '../context/auth.context'
import { useState, useContext, useRef } from 'react'
import { nanoid } from 'nanoid'
import { ReactComponent as IconMenu } from '../assets/icon-menu.svg'
import { ReactComponent as IconSettings } from '../assets/icon-settings.svg'
import NavItem from './NavItem'

function Navbar(props) {
	const navRef = useRef()

	const { logOutUser, isLoggedIn } = useContext(AuthContext)

	const [navOpenState, setNavOpenState] = useState(false)

	const showNavbar = () => {
		// navRef.current.classList.toggle('active')
		setNavOpenState(!navOpenState)
	}

	const navMainItems = [
		{ title: 'Home', to: '/', end: false },
		{ title: 'Budget', to: '/budget', end: true },
		{ title: 'Goals', to: '/goals', end: true },
		{ title: 'Settings', icon: <IconSettings />, to: '/settings/budget', end: true },
	]

	return (
		<>
			<button
				onClick={showNavbar}
				className="btn-toggle-menu"
				aria-controls="nav_main"
				aria-label="Menü öffnen/schließen"
				aria-expanded={navOpenState}>
				<IconMenu />
			</button>
			<nav id="nav_main" ref={navRef}>
				{!isLoggedIn ? (
					<ul>
						{navMainItems.map((item) => {
							return (
								<li key={nanoid()}>
									<NavItem title={item.title} icon={item.icon} to={item.to} end={item.end} />
								</li>
							)
						})}
						{!isLoggedIn ? (
							<li key={nanoid()}>
								<button onClick={logOutUser}>Logout</button>
							</li>
						) : null}
					</ul>
				) : (
					<ul>
						{/* <li key={nanoid()}>
							<NavLink onClick={showNavbar} to="/">
								Home
							</NavLink>
						</li>
						<li key={nanoid()}>
							<NavLink onClick={showNavbar} to="/auth/signup">
								Sign Up
							</NavLink>
						</li> */}
					</ul>
				)}
			</nav>
		</>
	)
}

export default Navbar

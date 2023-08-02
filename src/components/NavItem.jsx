import { NavLink } from 'react-router-dom'

function NavItem(props) {
	console.log('NavItem props', props)
	return (
		<>
			<NavLink to={props.to} {...({ isActive }) => (isActive ? 'aria-current="page"' : null)}>
				{props.title}
			</NavLink>
		</>
	)
}

export default NavItem

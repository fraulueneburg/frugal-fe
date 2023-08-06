import { NavLink } from 'react-router-dom'

function NavItem(props) {
	return (
		<>
			<NavLink
				to={props.to}
				aria-label={props.icon ? props.title : null}
				{...({ isActive }) => (isActive ? 'aria-current="page"' : null)}>
				{props.icon ? props.icon : props.title}
			</NavLink>
		</>
	)
}

export default NavItem

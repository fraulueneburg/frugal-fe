import { NavLink } from 'react-router-dom'
import { nanoid } from 'nanoid'

function NavSub(props) {
	const subpagesArr = props.subpagesArr

	return (
		<>
			<nav id="nav_sub_aside">
				<ul>
					{subpagesArr.map((item) => {
						return (
							<li key={nanoid()}>
								<NavLink to={item.to} end={item.end}>
									{item.title}
								</NavLink>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default NavSub

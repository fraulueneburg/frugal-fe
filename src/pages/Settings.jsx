import NavSub from '../components/NavSub'
import FormBudget from '../components/FormBudget'
import FormCategories from '../components/FormCategories'
import FormUserSettings from '../components/FormUserSettings'

function Settings(props) {
	const subpagesArr = [
		{ title: 'Budget Settings', to: '/settings/budget', end: true },
		{ title: 'Categories', to: '/settings/categories', end: true },
		{ title: 'User Settings', to: '/settings/user', end: true },
	]

	return (
		<>
			<aside className="column is-3">
				<NavSub subpagesArr={subpagesArr} />
			</aside>
			<div className="column is-9">
				{props.subpage === 'user' ? (
					<>
						<h1>User Settings</h1>
						<FormUserSettings />
					</>
				) : props.subpage === 'categories' ? (
					<>
						<h1>Categories</h1>
						<FormCategories />
					</>
				) : (
					<>
						<h1>Budget Settings</h1>
						<FormBudget />
					</>
				)}
			</div>
		</>
	)
}

export default Settings

import { Outlet } from 'react-router-dom'
import Header from '../components/page/Header'
import Footer from '../components/page/Footer'

function Layout(props) {
	console.log('OUTLET CONTEXT', Outlet.context)
	console.log('OUTLET PROPS', Outlet.props)
	console.log('LAYOUT PROPS', props)

	return (
		<>
			<Header />
			<main>
				<div className="columns">
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Layout

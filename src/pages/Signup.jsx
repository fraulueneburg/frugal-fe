import { useState } from 'react'
import { ReactComponent as IconUser } from '../assets/icon-user.svg'
import { ReactComponent as IconEmail } from '../assets/icon-email.svg'
import { ReactComponent as IconPassword } from '../assets/icon-password.svg'

function Signup() {
	const handleSubmit = () => {}
	const [nameInput, setNameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')

	return (
		<>
			<div class="col is-9">
				<h1>Sign up</h1>
				<form onSubmit={handleSubmit}>
					<h1>My Profile</h1>
					<div className="input-group">
						<span>
							<IconUser />
						</span>
						<input
							type="text"
							name="name"
							value={nameInput}
							placeholder="Edit Name"
							onChange={(e) => setNameInput(e.target.value)}
						/>
					</div>
					<div className="input-group">
						<span>
							<IconEmail />
						</span>
						<input
							type="email"
							name="email"
							value={emailInput}
							placeholder="Email"
							onChange={(e) => setEmailInput(e.target.value)}
						/>
					</div>
					<div className="input-group">
						<span>
							<IconPassword />
						</span>
						<input
							type="password"
							name="password"
							value={passwordInput}
							placeholder="*********"
							onChange={(e) => setPasswordInput(e.target.value)}
							required
						/>
					</div>
					<button type="submit">SAVE</button>
				</form>
			</div>
		</>
	)
}

export default Signup

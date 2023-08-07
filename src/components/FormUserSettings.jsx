import { useState } from 'react'
import { ReactComponent as IconUser } from '../assets/icon-user.svg'
import { ReactComponent as IconEmail } from '../assets/icon-email.svg'
import { ReactComponent as IconPassword } from '../assets/icon-password.svg'

function FormSignup() {
	const handleSubmit = () => {}
	const [nameInput, setNameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<span>
						<IconUser />
					</span>
					<input
						type="text"
						name="name"
						value={nameInput}
						placeholder="Name"
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
				<label>
					Profile Picture
					<input type="file" name="profile picture" />
				</label>
				<div className="columns">
					<div className="column is-6">
						<label>currency</label>
						<select defaultValue="eur">
							<option value="eur">€</option>
							<option value="gbp">£</option>
							<option value="usd">US$</option>
						</select>
					</div>
					<div className="column is-6">
						<label>budget week starts on</label>
						<select defaultValue="5">
							<option value="1">Monday</option>
							<option value="2">Tuesday</option>
							<option value="3">Wednesday</option>
							<option value="4">Thursday</option>
							<option value="5">Friday</option>
							<option value="6">Saturday</option>
							<option value="0">Sunday</option>
						</select>
					</div>
				</div>
				<div className="card hint">
					<h3>tipp:</h3>
					<p>Weekends are usually when we spend the most money. So we recommend starting your budget week on friday. </p>
				</div>
				<button type="submit">save</button>
			</form>
		</>
	)
}

export default FormSignup

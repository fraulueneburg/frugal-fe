// import { useNavigate } from 'react-router-dom'
// import { API_URL } from '../config'
// import axios from 'axios'
import { useState } from 'react'
// import earningsGif from '../assets/gif-no-earnings.gif'
// import expensesGif from '../assets/gif-no-expenses.gif'
import spendingsGif from '../assets/gif-no-spendings.gif'
import { ReactComponent as IconMinus } from '../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import { nanoid } from 'nanoid'

function FormCategories() {
	const categoryColorsArr = [
		{ hue: '#e53935', name: 'red' },
		{ hue: '#d81b60', name: 'pink' },
		{ hue: '#8e24aa', name: 'purple' },
		{ hue: '#5e35b1', name: 'deep-purple' },
		{ hue: '#3949ab', name: 'indigo' },
		{ hue: '#1e88e5', name: 'blue' },
		{ hue: '#039be5', name: 'light-blue' },
		{ hue: '#00acc1', name: 'cyan' },
		{ hue: '#00897b', name: 'teal' },
		{ hue: '#43a047', name: 'green' },
		{ hue: '#7cb342', name: 'light-green' },
		{ hue: '#c0ca33', name: 'lime' },
		{ hue: '#fdd835', name: 'yellow' },
		{ hue: '#ffb300', name: 'amber' },
		{ hue: '#fb8c00', name: 'orange' },
		{ hue: '#f4511e', name: 'deep-orange' },
		{ hue: '#757575', name: 'grey' },
		{ hue: '#546e7a', name: 'blue-grey' },
		{ hue: '#141e26', name: 'dark-blue' },
	]

	// SPENDING CATEGORIES STATES
	const [spendingCategories, setSpendingCategories] = useState(['Food', 'Hobbies', 'Activities', 'Other'])
	const [newSpendingCategoryName, setNewSpendingCategoryName] = useState('')

	// SPENDING CATEGORIES FUNCTIONS

	const handleNewSpendingCategoryNameChange = (event) => {
		setNewSpendingCategoryName(event.target.value)
	}

	const handleAddSpendingCategory = (event) => {
		event.preventDefault()
		const newSpendingCategory = newSpendingCategoryName
		setSpendingCategories([...spendingCategories, newSpendingCategory])
		setNewSpendingCategoryName('')
	}

	const handleDeleteSpendingCategory = (index, event) => {
		event.preventDefault()
		// const filteredSpendingCategories = spendingCategories.filter((elem, i) => {
		// 	if (i !== index) return elem
		// })
		// setSpendingCategories(filteredSpendingCategories)
	}

	return (
		<>
			<form>
				<fieldset id="spendingCategories">
					<div className="card">
						{spendingCategories.length <= 0 ? (
							<div className="card-empty-text">
								<img src={spendingsGif} alt="" width="300" />
								<h4>No spending categories yet.</h4>
								<p>Start adding some via the form below.</p>
							</div>
						) : null}
						{spendingCategories.map((spendingCategory, index) => {
							return (
								<div key={nanoid()} className="columns">
									<div className="column">
										<input type="text" value={spendingCategory} />
									</div>
									<div className="column">
										<fieldset className="color-formfield">
											<div className="color-list">
												<div className="color-selected">
													<div className="color-indicator" style={{ backgroundColor: categoryColorsArr[index].hue }}></div>
												</div>
												<ul>
													{categoryColorsArr.map((color, i) => {
														return (
															<>
																<li key={nanoid()}>
																	<label htmlFor={color.name}>
																		<input type="radio" name={('color-', i)} id={color.name} defaultChecked={i === index} />
																		<div className="color-indicator" style={{ backgroundColor: color.hue }}></div>
																	</label>
																</li>
															</>
														)
													})}
												</ul>
											</div>
										</fieldset>
									</div>
									<div className="column">
										<button className="btn-icon btn-delete" onClick={(event) => handleDeleteSpendingCategory(index, event)}>
											<IconMinus />
										</button>
									</div>
								</div>
							)
						})}
					</div>
					<div className="columns">
						<input
							type="text"
							value={newSpendingCategoryName}
							onChange={handleNewSpendingCategoryNameChange}
							placeholder="name"
						/>
						<button className="btn-icon btn-add" onClick={handleAddSpendingCategory}>
							<IconPlus />
						</button>
					</div>
				</fieldset>
			</form>
		</>
	)
}

export default FormCategories

import { useState } from 'react'
import Fieldset from './FormBudgetFieldset'

function FormBudget() {
	const [userObj, setUserObj] = useState({
		currency: '€',
		earnings: [
			{ name: 'monthly earnings', amount: 0 },
			{ name: 'salary', amount: 0 },
			{ name: 'illegal casino', amount: 0 },
		],
		expenses: [
			{ name: 'rent', amount: 0 },
			{ name: 'electricity', amount: 0 },
			{ name: 'heating', amount: 0 },
		],
		savingGoals: [
			{ name: 'My saving goal', amount: 0 },
			{ name: 'My saving goal 2', amount: 0 },
			{ name: 'My saving goal 3', amount: 0 },
		],
	})

	// const [userObj2, setUserObj2] = useState({
	// 	currency: '€',
	// 	earnings: [
	// 		{ name: 'monthly earnings', amount: 0 },
	// 		{ name: 'salary', amount: 0 },
	// 		{ name: 'illegal casino', amount: 0 },
	// 	],
	// 	expenses: [
	// 		{ name: 'rent', amount: 0 },
	// 		{ name: 'electricity', amount: 0 },
	// 		{ name: 'heating', amount: 0 },
	// 	],
	// 	savingGoals: [
	// 		{ name: 'My saving goal', amount: 0 },
	// 		{ name: 'My saving goal 2', amount: 0 },
	// 		{ name: 'My saving goal 3', amount: 0 },
	// 	],
	// })

	const [budgetTotal, setBudgetTotal] = useState(0)

	const handleChange = (e, index) => {
		e.preventDefault()
		const parent = e.target.parentElement.parentElement.parentElement.id
		const inputIndex = index
		const inputName = e.target.name
		const inputValue = +e.target.value

		if (inputName === 'currency') {
			setUserObj({ ...userObj, [inputName]: inputValue })
		} else {
			setUserObj({ ...userObj, [parent]: { ...userObj[parent], [inputIndex]: { name: inputName, amount: inputValue } } })
		}

		setBudgetTotal(budgetTotal + inputValue)
	}

	const handleNew = (e, index) => {
		e.preventDefault()
		console.log('NEW ELEMENT', e)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	// useEffect(() => {

	// }, [budgetTotal])

	return (
		<>
			<form onSubmit={handleSubmit} className="form-budget">
				{/* <fieldset>
					<legend>Your currency</legend>
					<select name="currency" onChange={handleChange}>
						<option value="€">€</option>
						<option value="US$">US$</option>
						<option value="GBP">GBP</option>
					</select>
				</fieldset> */}
				<Fieldset data={userObj} index={1} handleChange={handleChange} handleNew={handleNew} />
				<Fieldset data={userObj} index={2} handleChange={handleChange} handleNew={handleNew} />
				<Fieldset data={userObj} index={3} handleChange={handleChange} handleNew={handleNew} />
				<fieldset>
					<legend>Your spending categories</legend>
				</fieldset>
				<fieldset>
					<legend>Your monthly budget:</legend>
					<big>
						{budgetTotal} {`${userObj.currency}`}
					</big>
				</fieldset>
				<button type="submit">Start planning</button>
			</form>
		</>
	)
}

export default FormBudget

// console.log("PARENT:", parent);
// console.log("INPUT INDEX:", inputIndex);
// console.log("INPUT NAME:", inputName);
// console.log("VALUE:", inputValue);

//setUserObj({ ...userObj, [parent]: { ...userObj[parent], 0: { name: inputName, amount: inputValue } } })
//setUserObj({ ...userObj, something: { indexIs: index, parent: parent, name: inputName, amount: inputValue } })

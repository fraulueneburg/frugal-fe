import { ReactComponent as IconMinus } from '../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'

function FormBudgetFieldset(props) {
	const currency = props.data.currency
	const dataName = Object.keys(props.data)[props.index]
	const dataArr = props.data[dataName]
	const handleChange = props.handleChange
	const handleNew = props.handleNew

	console.log('DATA ARR', dataArr)

	return (
		<fieldset id={dataName}>
			<legend>All your {dataName}</legend>

			{dataArr.map((item, index) => (
				<div className="form-row" key={index}>
					<label>{item.name}</label>
					<div className="input-group">
						<span className="">+</span>
						<input
							type="number"
							min="0"
							placeholder="0,00"
							step=".01"
							/*value={item.amount}*/ name={item.name}
							onChange={(e) => handleChange(e, index)}
						/>
						<span className="currency">{`${currency}`}</span>
					</div>
					<button className="btn-icon btn-delete" /*onSubmit={handleDelete}*/>
						<IconMinus />
					</button>
				</div>
			))}

			<div className="form-row" key={dataArr.length}>
				<input type="text" name="newItemName" placeholder="name" />
				<div className="input-group">
					<span className="">+</span>
					<input type="number" min="0" placeholder="0,00" step=".01" name="newItemAmount" />
					<span className="currency">{`${currency}`}</span>
				</div>
				<button className="btn-icon btn-add" onClick={(e) => handleNew(e, dataArr.length)}>
					<IconPlus />
				</button>
			</div>
		</fieldset>
	)
}

export default FormBudgetFieldset

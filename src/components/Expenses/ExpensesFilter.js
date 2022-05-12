import React from 'react';
import './ExpensesFilter.css';

function ExpensesFilter(props) {
	//* Handler
	const changeYearHandler = (e) => {
		props.onChangeFilter(e.target.value);
	};

	const currentYear = props.currentYear;

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label className="label">Filter by year</label>

				<select
					className="select"
					value={currentYear} //* default value
					onChange={changeYearHandler}
				>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="total">Всего</option>
				</select>
			</div>
		</div>
	);
}

export default ExpensesFilter;

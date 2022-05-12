import React, { useState } from 'react';
import './ExpensesForm.css';

function ExpensesForm(props) {
	//* useState for Handlers
	const [enteredTitle, setInteredTitle] = useState('');
	const [enteredAmount, setInteredAmount] = useState('');
	const [enteredDate, setInteredDate] = useState('');

	const titleChangeHandler = (e) => {
		setInteredTitle(e.target.value);
	};
	const amountChangeHandler = (e) => {
		setInteredAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setInteredDate(e.target.value);
	};

	//* for submittion button we added:
	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setInteredTitle('');
		setInteredAmount('');
		setInteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2026-12-31"
						// value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.setToFalse}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpensesForm;

import React, { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

function NewExpenses(props) {
	const saveExpenseComponentData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random(),
		};
		props.onAddExpense(expenseData);
		setButtonOpen = false;
	};

	const [btnOpen, setButtonOpen] = useState(false);

	const btnOpenHandler = () => {
		setButtonOpen(true);
	};

	const setBtnOpenToFls = () => {
		setButtonOpen(false);
	};

	let showForm = <button onClick={btnOpenHandler}>Add new car</button>;

	if (btnOpen) {
		showForm = (
			<ExpensesForm
				setToFalse={setBtnOpenToFls}
				showForm={showForm}
				onSaveExpenseData={saveExpenseComponentData}
			/>
		);
	}

	return <div className="new-expense">{showForm}</div>;
}

export default NewExpenses;

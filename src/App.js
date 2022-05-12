import React, { useState } from 'react';
import ExpenseRender from '../src/components/Expenses/ExpenseRender';
import NewExpenses from '../src/components/NewExpenses/NewExpenses';

const INITIAL_EXPENSES = [
	{
		title: 'Tesla Model X 2018',
		amount: 220,
		date: new Date(2019, 3, 25),
		id: 1,
	},
	{
		title: 'Range Rover Vogue 2020',
		amount: 340,
		date: new Date(2020, 4, 5),
		id: 2,
	},
	{
		title: 'Mercedes-Benz S Coupe 2018',
		amount: 400,
		date: new Date(2022, 2, 22),
		id: 3,
	},
	{
		title: 'Mercedes-Benz G65 2022',
		amount: 1000,
		date: new Date(2022, 7, 12),
		id: 4,
	},
];

function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			const newExp = [expense, ...prevExpenses];
			return newExp;
		});
	};

	return (
		<div>
			<NewExpenses onAddExpense={addExpenseHandler} />
			<ExpenseRender items={expenses} />
		</div>
	);
}

export default App;

import React from 'react';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import './ExpenseRender.css';
import './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function ExpenseRender(props) {
	const [filteredYear, setFilteredYear] = useState('2020'); //* We initiallized a year

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((item) => {
		return item.date.getFullYear() === +filteredYear;
	}); //We got an Array

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					currentYear={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart filteredExpenses={filteredExpenses} />
				<ExpensesList
					expensesFiltered={filteredExpenses}
					expenses={props.items}
				/>
			</Card>
		</div>
	);
}

export default ExpenseRender;

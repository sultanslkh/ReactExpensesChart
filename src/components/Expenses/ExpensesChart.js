import React from 'react';
import Chart from '../Chart/Chart';

function ExpensesChart(props) {
	const chartDataPoints = [
		{ label: 'Январь', value: 0 },
		{ label: 'Февраль', value: 0 },
		{ label: 'Март', value: 0 },
		{ label: 'Апрель', value: 0 },
		{ label: 'Май', value: 0 },
		{ label: 'Июнь', value: 0 },
		{ label: 'Июль', value: 0 },
		{ label: 'Август', value: 0 },
		{ label: 'Сентябрь', value: 0 },
		{ label: 'Октябрь', value: 0 },
		{ label: 'Ноябрь', value: 0 },
		{ label: 'Декабрь', value: 0 },
	];

	props.filteredExpenses.forEach((expense) => {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	});

	return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;

import './ExpenseDate.css';

function ExpenseDate(props) {
	const months = props.date.toLocaleString('en-US', { month: 'long' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();
	return (
		<div className="expense-date">
			<div className="expense-date__month">{months}</div>
			<div className="expense-year">{year}</div>
			<div className="expense-day">{day}</div>
		</div>
	);
}

export default ExpenseDate;

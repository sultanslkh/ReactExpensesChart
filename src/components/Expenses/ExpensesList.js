import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
	const labelCar = <h2 className="label">Sultan's cars:</h2>;

	if (props.expensesFiltered.length === 0) {
		return <h2 className="expenses-list__fallback">Нет приобретенных машин</h2>;
	}
	if (props.expensesFiltered.length > 4) {
		props.expenses.map((expenses) => {
			return (
				<ExpenseItem
					key={expenses.id}
					title={expenses.title}
					amount={expenses.amount}
					date={expenses.date}
				/>
			);
		});
	}

	return (
		<ul className="expenses-list">
			{labelCar}
			{props.expensesFiltered.map((expenses) => {
				return (
					<ExpenseItem
						key={expenses.id}
						title={expenses.title}
						amount={expenses.amount}
						date={expenses.date}
					/>
				);
			})}
		</ul>
	);
}

export default ExpensesList;

import React from 'react'; //* Default component
// import { useState } from 'react'; //* Component of React library, that helps us with Event Handler!
import './ExpenseItem.css'; //* Simply to tell JS we going to use that particular styles with it!
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenceItem(props) {
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">{props.amount}</div>
				</div>
			</Card>
		</li>
	);
}

export default ExpenceItem;

import './Card.css'; //* Import default style

function Card(props) {
	//* Because we create our own element (looks like own html) we should manually define properties for that. Here we create our own class property:
	const classes = 'card ' + props.className;

	//* In order to rap into our element we should insert props.children (React stuff)
	return <div className={classes}>{props.children}</div>;
}

export default Card;

import React from 'react';

function Greeter({ name, excitement = 1, age = 18 }) {
	const greet = () => {
		alert(`Hello there, ${name}`);
	};
	return (
		<React.Fragment>
			<h1>
				Hi there, {name}
				{'!'.repeat(excitement)}
			</h1>
			<p>You are {age} years old</p>
			<button onClick={greet}>Click Me!</button>
		</React.Fragment>
	);
}

export default Greeter;
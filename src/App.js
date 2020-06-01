import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import Cart from './Cart';
import './App.css';

const items = [
	{ id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2 },
	{ id: 2, name: 'Pinto Beans', price: 1.99, qty: 3 },
	{ id: 3, name: 'Sour Cream', price: 3.5, qty: 1 }
];

function App() {
	return (
		<div>
			<Cart initialItems={items} />
			<Counter step={5} />
			<Counter step={10} />
			<MoodToggler />
			<Navbar />
			<Greeter name="Alessandro" age="23" excitement={4} />
			<Greeter name="Sparky" excitement={2} />
			<h1>Hello from App!</h1>
		</div>
	);
}

export default App;

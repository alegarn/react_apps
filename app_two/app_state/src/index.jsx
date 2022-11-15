import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from "./components/Color";
import Counter from './components/Counter';
import Parent from './components/Parent';

const container = document.getElementById('root');

const root = createRoot(container); 

const App = () => (
	<div>
		<h1>Hello world!</h1>
		<p>How are you?</p>
    <Colors />
    <Counter />
    <Parent />
	</div>
);

root.render(
  <App />
);
import React from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "components/Form";

const container = document.getElementById('root');

const root = createRoot(container); 

const App = () => (
	<div>
		<h1>Hello world!</h1>
		<Form />
	</div>
);

root.render(
  <App />
);
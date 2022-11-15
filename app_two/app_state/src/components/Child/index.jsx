import React from 'react';

// sayHey = fonction prop
const Child = ({ onSayHey }) => (
	<button type="button" onClick={onSayHey}>Say hey!</button>
);

export default Child;
import React from 'react';
import Child from '../Child';

const Parent = () => {

	const sayHey = () => {
		console.log("Hey! (prop in child component)");
	};
	
	// sayHey en prop
	return(<Child onSayHey={sayHey} />)
};

export default Parent;
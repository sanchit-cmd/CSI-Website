import React from 'react';
import Card from './Card';

const Faculty = () => {
	return (
		<div className='grid grid-cols-4 gap-20 w-4/5 mx-auto'>
			<Card post={'Dept. of CSE'} linkedin={'fff'} />
			<Card post={'Dept. of CSE'} linkedin={'fff'} />
			<Card post={'Dept. of CSE'} linkedin={'fff'} />
			<Card post={'Dept. of CSE'} linkedin={'fff'} />
		</div>
	);
};

export default Faculty;

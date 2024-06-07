import React, { useState } from 'react';
import Form from './Form';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import NoEvents from './NoEvents';
const Registration = () => {
	const [events, setEvents] = useState(true);
	return (
		<div className='bg-white'>
			<NavBar />
			{events ? <Form title='Register' /> : <NoEvents />}
			<Footer />
		</div>
	);
};

export default Registration;

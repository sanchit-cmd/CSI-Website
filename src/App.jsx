import React, { useState } from 'react';
import Home from './screens/Home';
import Registration from './Components/Forms/Registration';
import { Route, Routes } from 'react-router-dom';

import Team from './Components/Leads/Team';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/register' element={<Registration />} />
			<Route path='/team' element={<Team/>} />
		</Routes>
	);
}

export default App;

import React, {useState} from 'react';
import Home from "./screens/Home"
import Registration from './Components/Forms/Registration';
import { Route, Routes} from 'react-router-dom'
import CurrentLeads from './Components/Leads/CurrentLeads';

function App() {
	const [mode, setMode] = useState(true);


	const handleMode = () => {
		setMode(!mode);
	};
	return (
		<Routes>
			<Route path='/' element={<Home mode={mode} setMode={setMode} handleMode={handleMode}/>}/>
			<Route path='/register' element={<Registration mode={mode} handleMode={handleMode}/>}/>
			<Route path='/current-leads' element={<CurrentLeads mode={mode} handleMode={handleMode}/>}/>
		</Routes>
	);
}

export default App;

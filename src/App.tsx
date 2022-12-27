import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import RootLayout from './components/RootLayout';
import Profile from './pages/Profile';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<RootLayout>
				<Routes>
					<Route path='/' element={<Profile />} />
					<Route path='/AboutMe' element={<AboutMe />} />
					<Route path='/Contact' element={<Contacts />} />
					<Route path='/Projects' element={<NotFound />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</RootLayout>
		</BrowserRouter>
	);
}

export default App;

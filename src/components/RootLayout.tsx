import React from 'react';
import MainNavigation from './MainNavigation';
import './RootLayout.css';

type ChildProps = {
	children: React.ReactNode;
};

function RootLayout({children}: ChildProps) {
	return (
		<>
			<MainNavigation />
			<main className='main-size'>
				{children}
			</main>
		</>
	);
}

export default RootLayout;

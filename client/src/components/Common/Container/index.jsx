import React from 'react'

const Container = ({ children }) => {
	return (
		<div className="App container mx-auto h-screen flex flex-col">
			{children}
		</div>
	)
}

export default Container

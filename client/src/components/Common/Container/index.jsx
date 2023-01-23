import React from 'react'

const Container = ({ children }) => {
	return (
		<div className="App xl:container xl:mx-auto h-screen flex flex-col">
			{children}
		</div>
	)
}

export default Container

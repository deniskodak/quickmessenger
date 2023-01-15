import React from 'react'
import { Vortex } from 'react-loader-spinner'

const SIZES = {
	small: 'small',
	medium: 'medium',
	large: 'large',
}

const Loader = ({
	size = SIZES.medium,
	children,
	loading,
	wrapperClasses = '',
}) => {
	const loader =
		size === SIZES.medium ? (
			<div className="absolute w-full h-full top-0 flex justify-center items-center">
				<Vortex
					visible={true}
					height="80"
					width="80"
					ariaLabel="vortex-loading"
					wrapperStyle={{}}
					wrapperClass="vortex-wrapper"
					colors={['aqua', 'white', 'aqua', 'white', 'white', 'aqua']}
					className="absolute"
				/>
			</div>
		) : (
			<div></div>
		)

	return (
		<div className={`relative ${wrapperClasses}`}>
			{loading ? <div className="opacity-10">{children}</div> : children}
			{loading ? loader : null}
		</div>
	)
}

export default Loader

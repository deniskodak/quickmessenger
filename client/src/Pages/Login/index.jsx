import React, { useState } from 'react'

import AuthForm from '../../components/AuthForm'
import Container from '../../components/Common/Container'
import FullLogo from '../../components/Common/Logo'
import FullLetterBubbles from '../../components/Common/Animation/FullLetterBubbles'

const Login = () => {
	const [isRegistration, setIsRegistration] = useState(false)

	const labelClasses = {
		textClasses: 'text-3xl md:text-4xl',
		bgClasses: 'rounded-xl',
		iconClasses: '-right-7 -top-5 md:-right-8 md:-top-7',
	}

	const handleToggleForm = () => setIsRegistration(!isRegistration)

	const iconClasses = 'h-60 w-full md:w-1/2'

	return (
		<div className="gradient_animation">
			<FullLetterBubbles/>
			<Container>
				<div className="md:flex flex-wrap lg:h-screen lg:items-center ">
					<div className=" p-4 text-center md:flex md:items-center md:w-full lg:flex-col lg:w-1/2 xl:w-1/3 xl:ml-auto">
						<FullLogo
							iconClasses={iconClasses}
							labelClasses={labelClasses}
						/>
					</div>
					<div className="p-4 md:mx-auto md:w-10/12 lg:w-1/2 xl:w-1/3 xl:ml-4">
						<AuthForm isRegistration={isRegistration} />
					</div>
					<div className="text-center md:w-full pt-2 pb-4">
						<button
							onClick={handleToggleForm}
							className="underline text-slate-300 text-sm md:text-base">
							{isRegistration ? 'Already have account?' : 'Create an account' }
						</button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Login

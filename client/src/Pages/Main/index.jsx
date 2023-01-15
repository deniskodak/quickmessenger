import React from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { useRecoilValue } from 'recoil'
import { selectedChanel } from '../../store/atom'
import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'
import Container from '../../components/Common/Container'
import Header from '../../components/Common/Header'

const Main = ({ breakpoints, currentBreakpoint }) => {
	const selectedChanelId = useRecoilValue(selectedChanel)
	const isMobileDevice = breakpoints[currentBreakpoint] < breakpoints.tablet

	const props = isMobileDevice
		? {
				isRightShown: selectedChanelId,
				isLeftShown: !selectedChanelId,
		  }
		: { isRightShown: true, isLeftShown: true }

	return (
		<Container>
			<Header />
			<section className="flex grow">
				<LeftSidebar {...props} />
				<RightSidebar {...props} breakpoint={currentBreakpoint} />
			</section>
		</Container>
	)
}

export default withBreakpoints(Main)

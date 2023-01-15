import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  RecoilRoot,
} from 'recoil';
import ReactBreakpoints from 'react-breakpoints'
 
const breakpoints = {
  mobile: 640,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1280,
  desktopLarge: 1536,
}

const root = ReactDOM.createRoot(
	document.getElementById('root'),
)
root.render(
	<React.StrictMode>
    <RecoilRoot>
      <ReactBreakpoints breakpoints={breakpoints}      debounceResize={true}
>

		<App />
      </ReactBreakpoints>
    </RecoilRoot>
	</React.StrictMode>,
)

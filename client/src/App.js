import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'
import AppContainer from './AppContainer'

function App({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<AppContainer />
		</ThemeProvider>
	)
}
export default App

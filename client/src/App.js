import React from 'react'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'
import AppContainer from './AppContainer'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<AppContainer />
		</ThemeProvider>
	)
}
export default App

import React from 'react'
import {
	ThemeProvider, theme, ColorModeProvider, CSSReset
} from '@chakra-ui/core'

import AppContainer from './AppContainer'

const App = () => (
	<ThemeProvider theme={theme}>
		<ColorModeProvider>
			<CSSReset />
			<AppContainer />
		</ColorModeProvider>
	</ThemeProvider>
)
export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		body: `'Poppins', sans-serif`,
		heading: `'League Spartan', sans-serif`
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
)

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from '../themes'
import { AdminLayout } from '../components/layouts'

export default function App({ Component, pageProps }: AppProps) {
	// return other layout based on the type of user

	// if (!user.isAdmin) {
	// 	return (
	// 		<ThemeProvider theme={lightTheme}>
	// 			<CssBaseline />
	// 			<AdminLayout>
	// 				<Component {...pageProps} />
	// 			</AdminLayout>
	// 		</ThemeProvider>
	// 	)
	// }

	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<AdminLayout>
				<Component {...pageProps} />
			</AdminLayout>
		</ThemeProvider>
	)
}

import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#ffffff',
			paper: '#ffffff',
		},
		primary: {
			main: '#4a148c',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: '#f44336',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#4a148c',
					elevation: 0,
				},
			},
		},
	},
})

import { useEffect, useState } from 'react'
import Image from 'next/image'

import emailIcon from '../../public/icons/email-icon.svg'
import notificationIcon from '../../public/icons/notification-icon.svg'

import Sidebar from '../UI/Sidebar'
interface Props {
	children: JSX.Element | JSX.Element[]
}

interface Notifications {
	id: number
	title: string
	description: string
	createAt: string
}

interface Messages {
	id: number
	title: string
	description: string
	createAt: string
}

export function AdminLayout(props: Props) {
	const [notifications, setNotifications] = useState<Notifications[]>([])
	const [messages, setMessages] = useState<Messages[]>([])

	useEffect(() => {
		// Get notifications from API
		setNotifications([
			{
				id: 1,
				title: 'Notification 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
				createAt: '2022-11-12',
			},
			{
				id: 2,
				title: 'Notification 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
				createAt: '2022-11-31',
			},
			{
				id: 3,
				title: 'Notification 3',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel nisl.',
				createAt: '2022-12-10',
			},
		])
	}, [])

	return (
		<div className="flex h-screen w-full px-40">
			<Sidebar />
			<div className="w-full h-full flex-1 flex flex-col pl-20 relative ml-64">
				<div className="w-[69%] h-28 flex items-center justify-between fixed z-50 bg-white">
					<h2 className="text-3xl font-semibold">¡Bienvenido/a Jhon Doe!</h2>
					<div className="flex items-center gap-10">
						<div className="relative">
							{notifications.length > 0 && (
								<span className="absolute -top-3 -right-3 w-6 h-6 bg-red-400 rounded-full text-white text-sm font-medium flex items-center justify-center">
									{notifications.length}
								</span>
							)}
							<Image src={emailIcon} alt="email icon" />
						</div>
						<Image src={notificationIcon} alt="notification icon" />
						<div className="w-14 h-14 rounded-full border border-[#465EF4] bg-gray-300" />
					</div>
				</div>
				<div className="w-full h-full mt-36">{props.children}</div>
			</div>
		</div>

		// <Box sx={{ display: 'flex' }}>
		// 	<CssBaseline />
		// 	<AppBar
		// 		position="fixed"
		// 		sx={{
		// 			width: { sm: `calc(100% - ${drawerWidth}px)` },
		// 			ml: { sm: `${drawerWidth}px` },
		// 			backgroundColor: '#fcfcfc',
		// 			color: '#1e1e1e',
		// 			height: '100px',
		// 		}}
		// 		elevation={0}
		// 	>
		// 		<Toolbar>
		// 			<IconButton
		// 				color="inherit"
		// 				aria-label="open drawer"
		// 				edge="start"
		// 				onClick={handleDrawerToggle}
		// 				sx={{ mr: 2, display: { sm: 'none' } }}
		// 			>
		// 				<MenuIcon />
		// 			</IconButton>
		// 			<Typography
		// 				variant="h6"
		// 				noWrap
		// 				component="div"
		// 				className="mt-6 ml-10 text-4xl"
		// 			>
		// 				¡Bienvenid@ {props.User.FirstName}!
		// 			</Typography>
		// 			<div className="absolute right-10 top-2 flex items-center gap-4">
		// 				<Badge badgeContent={4} color="secondary">
		// 					<EmailOutlinedIcon fontSize="large" color="success" />
		// 				</Badge>
		// 				<Badge badgeContent={4} color="secondary">
		// 					<NotificationsNoneOutlinedIcon fontSize="large" color="success" />
		// 				</Badge>

		// 				<Avatar
		// 					alt="John Doe"
		// 					src="../../public/favicon.ico"
		// 					sx={{ width: 80, height: 80, bgcolor: '#465EF4' }}
		// 					className="border-[5px] border-[#8CFBFC]"
		// 				/>
		// 			</div>
		// 		</Toolbar>
		// 	</AppBar>
		// 	<Box
		// 		component="nav"
		// 		sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		// 		aria-label="mailbox folders"
		// 	>
		// 		{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
		// 		<Drawer
		// 			container={container}
		// 			variant="temporary"
		// 			open={mobileOpen}
		// 			onClose={handleDrawerToggle}
		// 			ModalProps={{
		// 				keepMounted: true, // Better open performance on mobile.
		// 			}}
		// 			sx={{
		// 				display: { xs: 'block', sm: 'none' },
		// 				'& .MuiDrawer-paper': {
		// 					boxSizing: 'border-box',
		// 					width: drawerWidth,
		// 				},
		// 			}}
		// 		>
		// 			{drawer}
		// 		</Drawer>
		// 		<Drawer
		// 			variant="permanent"
		// 			sx={{
		// 				display: { xs: 'none', sm: 'block' },
		// 				'& .MuiDrawer-paper': {
		// 					boxSizing: 'border-box',
		// 					width: drawerWidth,
		// 				},
		// 			}}
		// 			open
		// 		>
		// 			{drawer}
		// 		</Drawer>
		// 	</Box>
		// 	<Box
		// 		component="main"
		// 		sx={{
		// 			flexGrow: 1,
		// 			p: 3,
		// 			width: { sm: `calc(100% - ${drawerWidth}px)` },
		// 			mt: { sm: '20px' },
		// 			bgcolor: '#fcfcfc',
		// 		}}
		// 		className="flex-grow"
		// 	>
		// 		{/* <Toolbar /> */}
		// 		{props.children}
		// 	</Box>
		// </Box>
	)
}

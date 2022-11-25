import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { menuItems } from '../../utils/adminMenuItems';
import { useRouter } from 'next/router';
import LogoLight from '../../public/logoLight.png';
import LogoColegio from '../../public/logoColegio.png';
import Image from 'next/image';
import { Avatar, Badge } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const drawerWidth = 350;

interface Props {
	children: JSX.Element | JSX.Element[];
	window?: () => Window;
	User: {
		FirstName: string;
		LastName: string;
		Email: string;
	};
}

export function AdminLayout(props: Props) {
	const router = useRouter();
	const currentRoute = router.pathname;

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar>
				<Image
					src={LogoColegio}
					alt='Logo Colegio'
					width={150}
					height={64}
					className='ml-28 mt-4'
				/>
			</Toolbar>
			<List className='py-20 '>
				{menuItems.map(({ text, icon, href }) => (
					<Link href={href} key={text}>
						<ListItem
							key={text}
							disablePadding
							className={
								currentRoute === href
									? 'border-r-[14px] border-[#8CFBFC] my-2'
									: 'my-2'
							}
						>
							<ListItemButton className='py-2'>
								<ListItemIcon className='pl-28 text-5xl text-[#465EF4]'>
									{icon}
								</ListItemIcon>
								<ListItemText
									primary={text}
									primaryTypographyProps={{
										className:
											'pl-4 text-xl font-semibold text-[#05124787]',
									}}
								/>
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<List className='pl-28 mr-4 absolute bottom-10'>
				<p className='text-xl'>Desarrollado por</p>
				<Image
					src={LogoLight}
					alt='Picture of the author'
					width={270}
					height={200}
				/>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	//active link
	const [activeLink, setActiveLink] = React.useState('');

	React.useEffect(() => {
		setActiveLink(router.pathname);
	}, [router.pathname]);

	activeLink === '/admin' && setActiveLink('/admin/dashboard');

	//! ***************************************return***************************************
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					backgroundColor: '#fcfcfc',
					color: '#1e1e1e',
					height: '100px',
				}}
				elevation={0}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						noWrap
						component='div'
						className='mt-6 ml-10 text-4xl'
					>
						¡Bienvenid@ {props.User.FirstName}!
					</Typography>
					<div className='absolute right-10 top-2 flex items-center gap-4'>
						<Badge badgeContent={4} color='secondary'>
							<NotificationsNoneOutlinedIcon
								fontSize='large'
								color='success'
							/>
						</Badge>
						<Badge badgeContent={4} color='secondary'>
							<EmailOutlinedIcon
								fontSize='large'
								color='success'
							/>
						</Badge>
						<Avatar
							alt='John Doe'
							src='../../public/favicon.ico'
							sx={{ width: 80, height: 80, bgcolor: '#465EF4' }}
							className='border-[5px] border-[#8CFBFC]'
						/>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					mt: { sm: '20px' },
				}}
			>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
}

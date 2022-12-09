import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import LoopRoundedIcon from '@mui/icons-material/LoopRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'

export const menuItems: MenuItem[] = [
	{
		text: 'Dashboard',
		icon: <DashboardOutlinedIcon fontSize="inherit" />,
		href: '/',
	},
	{
		text: 'Gestion',
		icon: <LoopRoundedIcon fontSize="inherit" />,
		href: '/gestion',
	},
	{
		text: 'Registro',
		icon: <HowToRegOutlinedIcon fontSize="inherit" />,
		href: '/registro',
	},
	{
		text: 'Recursos',
		icon: <MenuBookRoundedIcon fontSize="inherit" />,
		href: '/recursos',
	},
	{
		text: 'Pagos',
		icon: <AttachMoneyOutlinedIcon fontSize="inherit" />,
		href: '/pagos',
	},
]

type MenuItem = {
	text: string
	icon: JSX.Element
	href: string
}

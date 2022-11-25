import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import { menuItems } from '../../utils/adminMenuItems';

interface Props {
	User: {
		FirstName: string;
		LastName: string;
		Email: string;
	};
}

export const Sidebar: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return (
		<div>
			<Toolbar>
				<Typography variant='h6' noWrap component='div'>
					{props.User.FirstName} {props.User.LastName}
					<br />
					<p>school</p>
				</Typography>
			</Toolbar>
			<List>
				{menuItems.map(({ text, icon, href }) => (
					<Link href={href} key={text}>
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>{icon}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List></List>
		</div>
	);
};

export default Sidebar;

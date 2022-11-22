import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const Sidebar: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	return <div>Sidebar</div>;
};

export default Sidebar;

import Image from 'next/image'
import Link from 'next/link'
import { menuItems } from '../../utils/adminMenuItems'
import logoCollege from '../../public/logo-college.svg'
import logoLight from '../../public/logo-light.svg'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const Sidebar = () => {
	const router = useRouter()
	const currentRoute = router.pathname

	const activePage = useMemo(() => {
		return menuItems.find((item) => item.href === currentRoute)
	}, [currentRoute])

	return (
		<div className="w-64 h-full flex flex-col items-start justify-between pt-6 pb-10 border-r fixed z-50 bg-white">
			<Image
				src={logoCollege}
				alt="Logo of the college"
				className="object-center"
				priority
			/>
			<nav className="w-full">
				<ul className="w-full flex flex-col items-start gap-14">
					{menuItems.map(({ text, icon, href }, index) => (
						<li key={index} className="w-full relative">
							<Link href={href} className={`w-full flex items-center gap-10`}>
								{activePage?.href === href && (
									<motion.span
										layoutId="underline"
										className="absolute h-full w-2 bg-[#8CFBFC] right-0"
									/>
								)}
								<div className="text-4xl text-[#465EF4]">{icon}</div>
								<span className="text-xl text-[#051247]">{text}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div>
				<span>Desarrollado por</span>
				<Image src={logoLight} alt="Develop by InstiConecta" priority />
			</div>
		</div>
	)
}

export default Sidebar

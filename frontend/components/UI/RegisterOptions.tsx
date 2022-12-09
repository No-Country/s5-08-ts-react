import Image from 'next/image'
import { useRouter } from 'next/router'
import rightArrow from '../../public/icons/rightArrow.svg'

interface RegisterOptionsProps {
	title: string
	illustration: any
}

const RegisterOptions: React.FC<RegisterOptionsProps> = ({
	title,
	illustration,
}) => {
	const router = useRouter()

	return (
		<div
			className="flex items-center justify-between w-full h-40 group hover:bg-gradient-to-r hover:from-[#402EDB] hover:to-transparent px-24 border border-[#402EDB] rounded-xl overflow-hidden cursor-pointer"
			onClick={() => router.push('/registro/' + title.toLowerCase())}
		>
			<h3 className="group-hover:text-white font-bold text-3xl text-[#7B819D]">
				{title}
			</h3>
			<div className="flex items-center gap-16">
				<Image
					src={illustration}
					alt="section illustration"
					width={275}
					height={275}
				/>
				<div>
					<Image src={rightArrow} alt="arrow icon" width={16} />
				</div>
			</div>
		</div>
	)
}

export default RegisterOptions

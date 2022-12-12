import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import registerIllustrations from '../../public/illustrations/registerIllustration.svg'

const RegisterLayout = ({ children }: any) => {
	const [activeRegister, setActiveRegister] = useState(0)
	const router = useRouter()

	return (
		<div className="w-full h-full flex flex-col gap-10">
			<div className="flex justify-between w-full">
				<div className="w-2/4 flex flex-col gap-16">
					<div className="flex flex-col gap-6">
						<h1 className="text-4xl font-medium">Registro</h1>
						<h3 className="text-2xl">Selecciona la opción de tu preferencia</h3>
					</div>
					<div className="flex flex-col gap-10">
						<div className="w-full flex">
							<button
								className={
									'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl rounded-bl flex-1 border border-[#402EDB]' +
									(activeRegister === 0 ? ' bg-blue-500 text-white' : '')
								}
								onClick={() => setActiveRegister(0)}
							>
								Alumnos
							</button>
							<button
								className={
									'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
									(activeRegister === 1 ? ' bg-blue-500 text-white' : '')
								}
								onClick={() => setActiveRegister(1)}
							>
								Profesores
							</button>
						</div>
					</div>
				</div>
				<div className="w-[250px] h-[250px]">
					<Image
						src={registerIllustrations}
						alt="awaiting request"
						width={300}
						className="object-center object-cover"
					/>
				</div>
			</div>
			{children}
		</div>
	)
}

export default RegisterLayout

import Image from 'next/image'
import { useState } from 'react'
import createRequestImage from '../../public/illustrations/create-request.svg'
import CreateRequestForm from '../UI/CreateRequestForm'

type userTypes = 0 | 1 | 2 | 3

const CreateRequestsModal = () => {
	const [activeSubPage, setActiveSubPage] = useState(0)

	return (
		<div className="w-full h-full flex flex-col p-10">
			<div className="flex w-full justify-between">
				<div className="flex flex-col gap-4 justify-center">
					<h2 className="text-3xl font-bold">Nueva Solicitud</h2>
					<h3 className="text-xl">
						Llena los datos y presiona el botón “Enviar”
					</h3>
				</div>
				<div className="w-[250px] h-[250px] absolute top-10 right-10">
					<Image
						src={createRequestImage}
						alt="admin illustration"
						className="object-center object-cover"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col gap-4 pt-4 relative z-10">
				<h2 className="text-2xl">Seleccione el area que desea gestionar</h2>
				<div className="w-full flex">
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl-2xl rounded-bl-2xl flex-1 border border-[#402EDB]' +
							(activeSubPage === 0 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => setActiveSubPage(0)}
					>
						Administrativo
					</button>
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
							(activeSubPage === 1 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => setActiveSubPage(1)}
					>
						Profesor
					</button>
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tr-2xl rounded-br-2xl flex-1 border border-[#402EDB]' +
							(activeSubPage === 2 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => setActiveSubPage(2)}
					>
						Representante
					</button>
				</div>
			</div>
			<CreateRequestForm />
		</div>
	)
}

export default CreateRequestsModal

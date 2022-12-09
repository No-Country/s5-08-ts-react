import Image from 'next/image'
import { useState } from 'react'
import adminIllustration from '../../public/illustrations/pana.svg'
import professorIllustration from '../../public/illustrations/professor-illustration.svg'
import represtIllustration from '../../public/illustrations/representative-illust.svg'
import studentIllustration from '../../public/illustrations/student-illustration.svg'
import {
	AdminInput,
	ProfessorInputs,
	RepresentativeInputs,
	StudentInputs,
} from '../../utils/CreateUserInputs'
import CreateUserForm from '../UI/CreateUserForm'

type userTypes = 0 | 1 | 2 | 3

const CreateUsersModal = () => {
	const [activeSubPage, setActiveSubPage] = useState(0)

	const TypeOfIllustrations = {
		0: adminIllustration,
		1: professorIllustration,
		2: represtIllustration,
		3: studentIllustration,
	}

	const TypeOfInputs = {
		0: AdminInput,
		1: ProfessorInputs,
		2: RepresentativeInputs,
		3: StudentInputs,
	}

	return (
		<div className="w-full h-full flex flex-col p-10">
			<div className="flex w-full justify-between">
				<div className="flex flex-col gap-4 justify-center">
					<h2 className="text-3xl font-bold">Agregar Usuario</h2>
					<h3 className="text-xl">
						Llena los datos y presiona el botón “Guardar”
					</h3>
				</div>
				<div className="w-[250px] h-[250px]">
					<Image
						src={TypeOfIllustrations[activeSubPage as userTypes]}
						alt="admin illustration"
						className="object-center object-cover"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col gap-4">
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
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
							(activeSubPage === 2 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => setActiveSubPage(2)}
					>
						Representante
					</button>
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
							(activeSubPage === 3 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => setActiveSubPage(3)}
					>
						Alumno
					</button>
				</div>
			</div>
			<CreateUserForm inputs={TypeOfInputs[activeSubPage as userTypes]} />
		</div>
	)
}

export default CreateUsersModal

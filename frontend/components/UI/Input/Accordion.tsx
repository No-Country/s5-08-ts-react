import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import downArrow from '../../../public/icons/down-arrow.svg'
import pencilIcon from '../../../public/icons/pencil-dark.svg'

interface AccordionProps {
	title: string
}

const asignaturas = [
	{
		id: 1,
		name: 'Matematicas',
	},
	{
		id: 2,
		name: 'Lenguaje',
	},
	{
		id: 3,
		name: 'Ciencias',
	},
	{
		id: 4,
		name: 'Ingles',
	},
	{
		id: 5,
		name: 'Arte',
	},
]

const Example: React.FC<AccordionProps> = ({ title }) => {
	return (
		<div className="w-full px-4 mt-8">
			<div className="mx-auto w-3/4 rounded-2xl bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={
									'flex w-full items-center justify-between border rounded-lg p-10 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 ' +
									(open ? 'section-gradient text-white' : '')
								}
							>
								<span className="text-3xl font-medium">{title}</span>
								{/* <ChevronUpIcon
									className={`${
										open ? 'rotate-180 transform' : ''
									} h-5 w-5 text-purple-500`}
								/> */}
								<div
									className={`${
										open ? 'rotate-180 transform' : ''
									} h-5 w-5 transition-all`}
								>
									<Image src={downArrow} alt="down arrow" />
								</div>
							</Disclosure.Button>

							{asignaturas.map((asignatura) => (
								<Disclosure.Panel className="px-10 py-4 text-gray-500 border text-xl flex items-center justify-between">
									<span>{asignatura.name}</span>
									<button>
										<Image src={pencilIcon} alt="pencil icon" width={24} />
									</button>
								</Disclosure.Panel>
							))}
						</>
					)}
				</Disclosure>
			</div>
		</div>
	)
}

export default Example

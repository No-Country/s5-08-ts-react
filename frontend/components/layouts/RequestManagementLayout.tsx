import { useEffect, useState } from 'react'
import awaitRequestImage from '../../public/illustrations/await-request.svg'
import acceptedRequest from '../../public/illustrations/accepted-request.svg'
import sentRequest from '../../public/illustrations/send-request.svg'
import { useRouter } from 'next/router'
import Image from 'next/image'
// import plusIcon from '../../public/icons/plus-icon.svg'
import * as Dialog from '@radix-ui/react-dialog'
import CreateRequestsModal from './CreateRequestsModal'
import crossIcon from '../../public/icons/cross-icon.svg'

type reqTypes = 0 | 1 | 2

const requestTypes = {
	0: 'Pendientes',
	1: 'Aceptadas',
	2: 'Enviadas',
}

const requestImages = {
	0: awaitRequestImage,
	1: acceptedRequest,
	2: sentRequest,
}

const RequestManagementLayout = ({ children }: any) => {
	const [activeRequestStatus, setActiveRequestStatus] = useState(0)
	const router = useRouter()

	const handleChangeStatusPage = (status: number) => {
		setActiveRequestStatus(status)

		status !== 0
			? router.push(
					`/gestion/requests/${requestTypes[status as reqTypes].toLowerCase()}`
			  )
			: router.push(`/gestion/requests`)
	}

	useEffect(() => {
		if (router.pathname === '/gestion/requests') {
			setActiveRequestStatus(0)
			return
		}
		setActiveRequestStatus(
			Object.values(requestTypes).indexOf(
				router.pathname.split('/')[3]?.charAt(0).toUpperCase() +
					router.pathname.split('/')[3]?.slice(1)
			) as reqTypes
		)
	}, [router.pathname])

	return (
		<div className="w-full h-full flex flex-col gap-10">
			<div className="flex justify-between w-full">
				<div className="w-2/4 flex flex-col gap-10">
					<div className="flex flex-col gap-6">
						<h1 className="text-4xl font-medium">Gestion de Solicitudes</h1>
						<h3 className="text-2xl">Selecciona la opción de tu preferencia</h3>
					</div>
					<div className="flex flex-col gap-10">
						<div className="w-full flex">
							<button
								className={
									'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl rounded-bl flex-1 border border-[#402EDB]' +
									(activeRequestStatus === 0 ? ' bg-blue-500 text-white' : '')
								}
								onClick={() => handleChangeStatusPage(0)}
							>
								Pendientes
							</button>
							<button
								className={
									'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
									(activeRequestStatus === 1 ? ' bg-blue-500 text-white' : '')
								}
								onClick={() => handleChangeStatusPage(1)}
							>
								Aceptadas
							</button>
							<button
								className={
									'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
									(activeRequestStatus === 2 ? ' bg-blue-500 text-white' : '')
								}
								onClick={() => handleChangeStatusPage(2)}
							>
								Enviadas
							</button>
						</div>
						<Dialog.Root>
							<Dialog.Trigger asChild>
								<button className="flex items-center gap-8">
									{/* <Image src={plusIcon} alt="plus icon" /> */}
									<span className="text-xl font-semibold text-[#05124787]">
										Crear solicitud
									</span>
								</button>
							</Dialog.Trigger>
							<Dialog.Portal>
								<Dialog.Overlay className="bg-black/50 z-[9999] fixed top-0 left-0 right-0 bottom-0 grid place-items-center">
									<Dialog.Content className="w-2/5 bg-white p-8 rounded-xl overflow-y-auto h-[85%] relative">
										<Dialog.Trigger asChild className="float-right">
											<button className="flex items-center gap-8 relative z-10">
												<Image src={crossIcon} alt="exit icon" width={28} />
											</button>
										</Dialog.Trigger>
										<CreateRequestsModal />
									</Dialog.Content>
								</Dialog.Overlay>
							</Dialog.Portal>
						</Dialog.Root>
					</div>
				</div>
				<div className="w-[250px] h-[250px]">
					<Image
						src={requestImages[activeRequestStatus as reqTypes]}
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

export default RequestManagementLayout

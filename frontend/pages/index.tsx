import Image from 'next/image'
import { useEffect, useState } from 'react'
import Calendar from '../components/Calendar/Calendar'
import AnnCharacter from '../public/announcement-character.svg'
import { hours } from '../utils/timeData'

export default function HomePage() {
	const [actualHour, setActualHour] = useState(new Date().getHours())
	const [actualDate, setActualDate] = useState(new Date())

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		const hour = new Date().getHours()

	// 		setActualHour(hour)
	// 	}, 3600000)

	// 	return () => clearInterval(interval)
	// }, [])

	const appointments = [
		{
			id: 1,
			title: 'Appointment 1',
			date: '2022-11-12',
			time: '10:00',
		},
		{
			id: 2,
			title: 'Appointment 2',
			date: '2022-11-12',
			time: '14:00',
		},
		{
			id: 3,
			title: 'Appointment 3',
			date: '2022-11-12',
			time: '18:00',
		},
	]

	const findHour = (hour: string) => {
		const result = appointments.find((appointment) => appointment.time === hour)

		return result
	}

	return (
		<div className="w-full h-full flex flex-col gap-10">
			<div className="w-full h-28 bg-gradient-to-r from-[#402EDB] to-[#5F8EF1] rounded-2xl relative px-6 flex items-center">
				<div className="w-32 absolute -top-10">
					<Image src={AnnCharacter} alt="announcements character" />
				</div>
				<h1 className="font-medium text-2xl text-white mx-auto">
					Atención: Hoy se vence el plazo de las inscripciones de primaria.
				</h1>
			</div>
			<div className="w-full h-full flex flex-col gap-8">
				<div className="w-full h-full flex gap-8">
					<div className="w-3/4 h-full">
						<Calendar />
					</div>
					<div className="border w-1/4 h-full rounded-2xl"></div>
				</div>
				<div className="w-full h-full flex gap-8">
					<div className="w-full h-[78%] flex-1 flex flex-col gap-2">
						<h3 className="text-2xl font-medium">Agenda del dia</h3>
						<div className="w-full h-full border rounded-2xl shadow-sm flex flex-col p-4 gap-2">
							<h3 className="text-xl font-medium pl-11">Hoy</h3>
							<div className="h-56 overflow-y-auto flex flex-col gap-4">
								{hours.map((time, index) => (
									<div key={index} className="flex gap-2 w-full">
										<p
											className={`text-lg border-r-4 w-40 text-center ${
												findHour(time) ? 'border-[#402EDB]' : 'border-[#E5E5E5]'
											}`}
										>
											{time}
										</p>
										<div
											className={`h-full w-full ${
												time === findHour(time)?.time
													? 'bg-gradient-to-r from-[#402EDB] to-[#5F8EF1]'
													: 'bg-gray-200'
											}
											`}
										>
											{time === findHour(time)?.time && (
												<p className="text-lg text-white text-center">
													{findHour(time)?.title}
												</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full h-[88%] flex-1 flex flex-col gap-2">
						<h3 className="text-2xl font-medium">Solicitudes</h3>
						<div className="w-full h-full border rounded-2xl shadow-sm p-4 flex flex-col gap-4">
							<div className="w-full h-full bg-slate-300"></div>
							<div className="w-full flex items-center gap-4">
								<div className="w-16 h-16 rounded-full bg-teal-500 border" />
								<div className="w-16 h-16 rounded-full bg-teal-500 border" />
								<div className="w-16 h-16 rounded-full bg-teal-500 border" />
								<div className="w-16 h-16 rounded-full bg-teal-500 border" />
								<div className="w-16 h-16 rounded-full bg-teal-500 border" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

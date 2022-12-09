// import { appointmentsData } from 'lib/data/appointmentsData'
// import { handleColorAppointments } from 'lib/helpers/handleAppointments'
import type React from 'react'

export interface ICalendarDays {
	selectedDay: Date
}

const CalendarDays: React.FC<ICalendarDays> = ({ selectedDay }) => {
	const firtsDayOfMonth = new Date(
		selectedDay.getFullYear(),
		selectedDay.getMonth(),
		1
	)
	const weekdayOfFirstDay = firtsDayOfMonth.getDay()

	const currentDays = []

	for (let day = 0; day < 42; day++) {
		if (day === 0 && weekdayOfFirstDay === 0) {
			firtsDayOfMonth.setDate(firtsDayOfMonth.getDate() - 7)
		} else if (day === 0) {
			firtsDayOfMonth.setDate(
				firtsDayOfMonth.getDate() + (day - weekdayOfFirstDay)
			)
		} else {
			firtsDayOfMonth.setDate(firtsDayOfMonth.getDate() + 1)
		}

		const calendar = {
			currentMonth: firtsDayOfMonth.getMonth() === selectedDay.getMonth(),
			date: new Date(firtsDayOfMonth),
			month: firtsDayOfMonth.getMonth(),
			number: firtsDayOfMonth.getDate(),
			selected: firtsDayOfMonth.toDateString() === selectedDay.toDateString(),
			year: firtsDayOfMonth.getFullYear(),
		}

		currentDays.push(calendar)
	}

	// const appointments = appointmentsData.map(appointment => {
	//     const date = new Date(appointment.date)

	//     return {
	//         date,
	//         day: date.getDate(),
	//         month: date.getMonth() + 1,
	//         number: date.getDate(),
	//         year: date.getFullYear(),
	//         specialty: appointment.specialty
	//     }
	// })

	const handleColorAppointments = (specialty: string) => {
		if (specialty === 'Dentist') {
			return 'bg-[#FF6323]'
		}

		if (specialty === 'General Diagnosis') {
			return 'bg-[#02DDB6]'
		}

		if (specialty === 'Cardiologist') {
			return 'bg-[#AB23FF]'
		}
	}

	return (
		<div className="w-full flex-grow grid grid-cols-7 justify-items-center box-border text-sm">
			{currentDays.map((day) => {
				return (
					<div
						className={
							'h-12 w-full relative border ' +
							(!day.currentMonth ? 'text-[#B5B7BF]' : 'bg-gray-100') +
							(day.selected
								? 'font-bold bg-secondary-600 text-black after:w-2 after:h-full after:absolute after:left-0 after:top-0 after:bg-[#8CFBFC] bg-gray-100'
								: '')
						}
						key={day.date.toDateString()}
					>
						<p className="relative z-10 flex py-1 px-3 items-start justify-start h-full cursor-default text-[12px] font-medium">
							{day.number}
						</p>
						{/* {appointments.map(appointment => {
                            if (
                                appointment.day === day.date.getDate() &&
                                appointment.month === day.date.getMonth() + 1
                            ) {
                                return (
                                    <div
                                        className={
                                            'absolute bottom-0 left-3 h-2 w-2 rounded-full ' +
                                            handleColorAppointments(
                                                appointment.specialty
                                            )
                                        }
                                        key={appointment.date.toDateString()}
                                    />
                                )
                            } else {
                                return null
                            }
                        })} */}
					</div>
				)
			})}
		</div>
	)
}

export default CalendarDays

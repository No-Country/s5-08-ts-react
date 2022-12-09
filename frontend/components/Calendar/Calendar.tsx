import Image from 'next/image'
import leftArrowIcon from '../../public/icons/leftArrow.svg'
import rightArrowIcon from '../../public/icons/rightArrow.svg'
import { useState } from 'react'
import { months, weekdays } from '../../utils/timeData'
import CalendarDays from './CalendarDays'

const Calendar = ({ days }: any) => {
	const [selectedDay, setSelectedDay] = useState(new Date())

	const handleShortDays = (day: string) => {
		return days === 'short'
	}

	const handleNextMonth = (direction: string) => {
		if (direction === 'next') {
			setSelectedDay(
				new Date(
					selectedDay.getFullYear(),
					selectedDay.getMonth() + 1,
					selectedDay.getDate()
				)
			)
		} else {
			setSelectedDay(
				new Date(
					selectedDay.getFullYear(),
					selectedDay.getMonth() - 1,
					selectedDay.getDate()
				)
			)
		}
	}

	return (
		<div className="flex flex-col gap-10">
			<div className="flex gap-10">
				<div className="w-full flex flex-col gap-6 bg-white rounded-2xl relative">
					<div className="flex items-center w-full justify-between">
						<button onClick={() => handleNextMonth('prev')}>
							<Image src={leftArrowIcon} alt="left arrow icon" />
						</button>
						<h2 className="text-2xl font-semibold">
							{months[selectedDay.getMonth()]} {selectedDay.getFullYear()}
						</h2>
						<button onClick={() => handleNextMonth('next')}>
							<Image src={rightArrowIcon} alt="right arrow icon" />
						</button>
					</div>
					<div className="w-full flex-grow flex flex-col gap-3">
						<div className="grid grid-cols-7 text-lg font-medium justify-items-center">
							{handleShortDays(days) ? (
								<>
									{weekdays.short.map((day) => (
										<div key={day} className="text-center w-28 flex-shrink-0">
											{day}
										</div>
									))}
								</>
							) : (
								<>
									{weekdays.long.map((day) => (
										<div key={day} className="text-center w-28 flex-shrink-0">
											{day}
										</div>
									))}
								</>
							)}
						</div>
						<div>
							<CalendarDays selectedDay={selectedDay} />
						</div>
					</div>
					{/* <div className="w-full h-24 bg-white border rounded-br-2xl rounded-bl-2xl"></div> */}
				</div>
			</div>
		</div>
	)
}

export default Calendar

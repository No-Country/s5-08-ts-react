const RequestCard = () => {
	return (
		<div className="w-full h-40 border border-[#2B1FC5] rounded-xl flex p-4 gap-10">
			<div className="bg-[#D9D9D93B] w-full rounded-xl flex py-4 px-14 gap-10">
				<div className="w-14 h-14 bg-red-100 border rounded-full" />
				<div className="flex flex-col gap-2">
					<div className="flex flex-col">
						<h2 className="text-xl font-bold">Mariela Lopez</h2>
						<h3 className="text-lg font-medium">
							Representante de Diego Brito
						</h3>
					</div>

					<p className="text-[#051247]">
						Ha solicitado una reunión contigo para el día viernes 18 de
						noviembre a las 16 horas.
					</p>
				</div>
			</div>
			<div className="flex flex-col w-64 h-full justify-between">
				<button className="bg-[#465EF4] text-white text-center py-2 rounded-lg">
					Aceptar
				</button>
				<button className="border border-[#465EF4] text-black text-center py-2 rounded-lg">
					Re-agendar
				</button>
				<button className="text-center">Ignorar</button>
			</div>
		</div>
	)
}

export default RequestCard

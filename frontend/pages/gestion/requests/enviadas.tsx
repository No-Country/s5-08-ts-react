import RequestManagementLayout from '../../../components/layouts/RequestManagementLayout'
import RequestAccordion from '../../../components/UI/RequestAccordion'

const Enviadas = () => {
	return (
		<div className="w-full h-full flex flex-col gap-10">
			<RequestManagementLayout>
				<div>
					<RequestAccordion title="Solicitudes aceptadas" />
					<RequestAccordion title="Solicitudes sin respuesta" />
				</div>
			</RequestManagementLayout>
		</div>
	)
}

export default Enviadas

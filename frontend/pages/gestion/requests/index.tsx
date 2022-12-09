import RequestManagementLayout from '../../../components/layouts/RequestManagementLayout'
import RequestCard from '../../../components/UI/RequestCard'

const index = () => {
	return (
		<div className="w-full h-full flex flex-col gap-10">
			<RequestManagementLayout>
				<div className="flex flex-col gap-10 w-3/4 mx-auto">
					<RequestCard />
					<RequestCard />
					<RequestCard />
				</div>
			</RequestManagementLayout>
		</div>
	)
}

export default index

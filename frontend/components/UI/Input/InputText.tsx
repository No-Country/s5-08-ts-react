interface InputTextProps {
	type?: string
	name: string
}

const InputText: React.FC<InputTextProps> = ({ type = 'text', name }) => {
	return (
		<input
			name={name}
			type={type}
			className="border p-3 focus:outline-none rounded-xl text-[#051247] text-xl"
		/>
	)
}

export default InputText

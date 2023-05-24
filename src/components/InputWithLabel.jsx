
const InputWithLabel = ({id,label,value , onInputChange , type='text'}) => {

	const handleChange = (event) => {
		onInputChange(event);
	};
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				onChange={handleChange}
				type={type}
				id={id}
				value={value}
			/>
		</>
	);
};

export default InputWithLabel;

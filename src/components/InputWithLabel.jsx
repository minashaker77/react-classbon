import { useEffect, useRef } from "react";

const InputWithLabel = ({id,label,value , onInputChange , type='text', isFocused}) => {

	const handleChange = (event) => {
		onInputChange(event);
	};

	const inputRef = useRef();
	useEffect(()=>{
		if(isFocused && inputRef.current){
			inputRef.current.focus();
		}
	},[isFocused])
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				onChange={handleChange}
				type={type}
				id={id}
				value={value}
				ref={inputRef}
				// autoFocus = {isFocused}
			/>
		</>
	);
};

export default InputWithLabel;

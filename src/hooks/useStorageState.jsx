import { useEffect, useState } from "react";
// custom hook:
const useStorageState = (key, initiallState) => {
	const [value, setValue] = useState(
		localStorage.getItem(key) || initiallState
	);
	useEffect(() => {
		localStorage.setItem(key, value);
	}, [value, key]);

	return [value, setValue];
};

export default useStorageState;

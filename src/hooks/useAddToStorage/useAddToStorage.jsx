import { useEffect, useState } from "react";

function useAddToStorage(key, initialData) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			let userData = localStorage.getItem(key);
			return userData ? JSON.parse(userData) : initialData;
		} catch (error) {
			console.error("error reading key : ", key, error);
			return initialData;
		}
	});
	useEffect(() => {
		try {
			const valueToStore =
				typeof storedValue === "function" ? storedValue() : storedValue;
			if (storedValue) {
			}
			localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error("error setting local storage key", key, error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}

export default useAddToStorage;

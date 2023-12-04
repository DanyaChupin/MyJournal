import { useEffect, useState } from 'react'

export const useLocalStorage = key => {
	const [data, setData] = useState([])
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key))
		if (res) {
			setData(res)
		} else {
			localStorage.setItem(key, JSON.stringify([]))
		}
	}, [key])
	const saveData = newDate => {
		localStorage.setItem(key, JSON.stringify(newDate))
		setData(newDate)
	}
	return [data, saveData]
}

import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import './App.css'
import JournalForm from './component/JournalForm/JournalForm'
import { useEffect, useState } from 'react'

const App = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'))
		if (data) {
			setItems(
				data.map(item => ({
					...item,
					date: new Date(item.date),
				}))
			)
		}
	}, [])

	const addItem = item => {
		setItems(prev => [
			{
				id: items.length > 0 ? Math.max(...prev.map(elem => elem.id)) + 1 : 1,
				text: item.text,
				tag: item.tag ? item.tag : null,
				title: item.title,
				date: new Date(),
			},
			...prev,
		])
	}

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items))
		}
	}, [items])

	return (
		<div className='layout'>
			<LeftPanel items={items} />
			<Body>
				<JournalForm addItem={addItem} />
			</Body>
		</div>
	)
}

export default App

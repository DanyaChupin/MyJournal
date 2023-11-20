import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import './App.css'
import JournalForm from './component/JournalForm/JournalForm'
import { useState } from 'react'

const App = () => {
	const [items, setItems] = useState([])
	const addItem = item => {
		setItems(prev => [
			{
				id: items.length > 0 ? Math.max(...prev.map(elem => elem.id)) + 1 : 1,
				text: item.text,
				title: item.title,
				date: new Date(),
			},
			...prev,
		])
	}
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

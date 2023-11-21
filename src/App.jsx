import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import './App.css'
import JournalForm from './component/JournalForm/JournalForm'
import { useLocalStorage } from './hooks/use-localStorage.hook'
import { UserContextProvider } from './context/user.context'
import { useState } from 'react'

const mapItems = items => {
	if (!items) {
		return []
	}
	return items.map(i => ({
		...i,
		// date: i.date,
	}))
}
const App = () => {
	const [items, setItems] = useLocalStorage('data')
	const [selectedItem, setSelectedItem] = useState({})
	const addItem = item => {
		console.log(item)
		if (!item.id) {
			setItems([
				{
					...item,
					id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
					date: new Date(),
				},
				...mapItems(items),
			])
		} else {
			setItems([
				...mapItems(items).map(i => {
					if (i.id === item.id) {
						return {
							...item,
						}
					}
					return i
				}),
			])
		}
	}

	return (
		<UserContextProvider>
			<div className='layout'>
				<LeftPanel items={mapItems(items)} setItem={setSelectedItem} />
				<Body>
					<JournalForm addItem={addItem} data={selectedItem} />
				</Body>
			</div>
		</UserContextProvider>
	)
}

export default App

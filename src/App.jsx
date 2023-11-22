import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import './App.css'
import JournalForm from './component/JournalForm/JournalForm'
import { useLocalStorage } from './hooks/use-localStorage.hook'
import { UserContext } from './context/user.context'
import { useContext, useEffect, useState } from 'react'

const mapItems = items => {
	if (!items) {
		return []
	}
	return items.map(i => ({
		...i,
	}))
}
const App = () => {
	const [items, setItems] = useLocalStorage('data')
	const [selectedItem, setSelectedItem] = useState(null)
	const { userId } = useContext(UserContext)
	useEffect(() => {
		setSelectedItem(null)
	}, [userId])
	const addItem = item => {
		if (!item.id) {
			setItems([
				{
					...item,
					id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
					date: new Date().toDateString(),
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
	const deleteItem = id => {
		setItems(items.filter(i => i.id !== id))
		setSelectedItem(null)
	}
	return (
		<div className='layout'>
			<LeftPanel
				items={mapItems(items)}
				clearForm={() => setSelectedItem(null)}
				setItem={setSelectedItem}
			/>
			<Body>
				<JournalForm
					addItem={addItem}
					data={selectedItem}
					deleteItem={deleteItem}
				/>
			</Body>
		</div>
	)
}

export default App

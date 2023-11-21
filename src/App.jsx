import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import './App.css'
import JournalForm from './component/JournalForm/JournalForm'
import { useLocalStorage } from './hooks/use-localStorage.hook'

const mapItems = items => {
	if (!items) {
		return []
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date),
	}))
}
const App = () => {
	const [items, setItems] = useLocalStorage('data')
	const addItem = item => {
		setItems([
			{
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
				text: item.text,
				tag: item.tag,
				title: item.title,
				date: new Date(),
			},

			...mapItems(items),
		])
	}

	return (
		<div className='layout'>
			<LeftPanel items={mapItems(items)} />
			<Body>
				<JournalForm addItem={addItem} />
			</Body>
		</div>
	)
}

export default App

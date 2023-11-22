import Header from '../../component/Header/Header'
import JournalAddButton from '../../component/JournalAddButton/JournalAddButton'
import JournalList from '../../component/JournalList/JournalList'
import './LeftPanel.css'

const LeftPanel = ({ items, setItem, clearForm }) => {
	return (
		<div className='left-Panel__wrapper'>
			<Header />
			<JournalAddButton clearForm={clearForm} />
			<JournalList items={items} setItem={setItem} />
		</div>
	)
}

export default LeftPanel

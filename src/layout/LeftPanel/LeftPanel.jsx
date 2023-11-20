import Header from '../../component/Header/Header'
import JournalAddButton from '../../component/JournalAddButton/JournalAddButton'
import JournalList from '../../component/JournalList/JournalList'
import './LeftPanel.css'

const LeftPanel = ({ items }) => {
	return (
		<div className='left-Panel__wrapper'>
			<Header />
			<JournalAddButton />
			<JournalList items={items} />
		</div>
	)
}

export default LeftPanel

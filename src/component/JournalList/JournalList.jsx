import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import './JournalList.css'

const JournalList = ({ items }) => {
	return (
		<div className='journal-list'>
			{items.length === 0 ? (
				<p className='journal-list__empty'>Записей нет, добавьте первую</p>
			) : (
				items.map(item => (
					<CardButton key={item.id}>
						<JournalItem title={item.title} date={item.date} text={item.text} />
					</CardButton>
				))
			)}
		</div>
	)
}

export default JournalList

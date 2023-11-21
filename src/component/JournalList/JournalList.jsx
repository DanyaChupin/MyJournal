import { useContext, useMemo } from 'react'
import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import './JournalList.css'
import { UserContext } from '../../context/user.context'

const JournalList = ({ items }) => {
	const { userId } = useContext(UserContext)

	const filteredItems = useMemo(
		() => items.filter(el => el.userId === userId),
		[items, userId]
	)
	return (
		<div className='journal-list'>
			{filteredItems.length === 0 ? (
				<p className='journal-list__empty'>Записей нет, добавьте первую</p>
			) : (
				filteredItems.map(item => (
					<CardButton key={item.id}>
						<JournalItem title={item.title} date={item.date} text={item.text} />
					</CardButton>
				))
			)}
		</div>
	)
}

export default JournalList

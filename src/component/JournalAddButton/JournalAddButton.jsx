import CardButton from '../CardButton/CardButton'
import './JournalAddButton.css'

const JournalAddButton = () => {
	return (
		<CardButton className='journal-add'>
			<img src='/plus.svg' alt='Добавление' />
			<span>Новое воспоминание</span>
		</CardButton>
	)
}

export default JournalAddButton

import CardButton from '../CardButton/CardButton'
import './JournalAddButton.css'

const JournalAddButton = ({ clearForm }) => {
	return (
		<CardButton className='journal-add' onClick={clearForm}>
			<img src='/plus.svg' alt='Добавление' />
			<span>Новое воспоминание</span>
		</CardButton>
	)
}

export default JournalAddButton

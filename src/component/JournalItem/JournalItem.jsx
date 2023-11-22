import './JournalItem.css'

const JournalItem = ({ title, date, text }) => {
	console.log(date)
	// const formatedDate = date.toISOString().split(T')[0]

	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<div className='journal-item__body'>
				<div className='journal-item__date'>{date}</div>
				<div className='journal-item__text'>{text}</div>
			</div>
		</>
	)
}

export default JournalItem

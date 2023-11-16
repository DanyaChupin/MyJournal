import styles from './JournalItem.module.css'

const JournalItem = () => {
	const title = 'Подготовка к обновлению курсов'
	const date = new Date()
	return (
		<div className={styles.journalItem}>
			<h2 className={styles.journalItem__header}>{title}</h2>
			<div className={styles.journalItem__body}>
				<div className={styles.journalItem__date}>{date.toString()}</div>
				<div className={styles.journalItem__text}>lorawdalwhjdaiwjidag</div>
			</div>
		</div>
	)
}

export default JournalItem

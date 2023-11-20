import { useState } from 'react'
import Button from '../Button/Button'
import cn from 'classnames'
import styles from './JournalForm.module.css'

const JournalForm = ({ addItem }) => {
	const [formValidState, setFormValidState] = useState(true)

	const addJournalItem = e => {
		e.preventDefault()
		const formDate = new FormData(e.target)
		const formProps = Object.fromEntries(formDate)
		let isFormValid = true
		if (formProps.title.trim().length == 0) {
			setFormValidState(false)
			isFormValid = false
		} else {
			setFormValidState(true)
			isFormValid = true
		}
		if (!isFormValid) {
			return
		}
		addItem(formProps)
	}
	return (
		<>
			<form className={styles['journal-form']} onSubmit={addJournalItem}>
				<div className={styles['input__wrapper']}>
					<input
						type='text'
						name='title'
						placeholder='Название'
						className={cn(styles['input-title'], styles['input'], {
							[styles['invalid']]: !formValidState,
						})}
					/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor='tag' className={styles['form-lables']}>
						<img src='/tag.svg' alt='Метки' />
						<span className={styles['form-lables__title']}>Метки</span>
					</label>
					<input
						placeholder='Куда относится?'
						className={styles['input']}
						type='text'
						name='tag'
					/>
				</div>
				<textarea
					placeholder='Запись...'
					className={styles['input']}
					name='text'
					id=''
					cols='30'
					rows='10'
				></textarea>
				<Button type='submit'>Сохранить</Button>
			</form>
		</>
	)
}

export default JournalForm

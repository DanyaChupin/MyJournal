import { useEffect, useReducer, useRef } from 'react'
import Button from '../Button/Button'
import cn from 'classnames'
import styles from './JournalForm.module.css'
import { INITIAL_STATE, formReducer } from './JournalForm.state'

const JournalForm = ({ addItem }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const { isValid, values, isFormReadyToSubmit } = formState
	const titleRef = useRef()

	useEffect(() => {
		let timerId
		if (!isValid) {
			titleRef.current.focus()
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' })
			}, 2000)
		}
		return () => {
			clearInterval(timerId)
		}
	}, [isValid])

	useEffect(() => {
		if (isFormReadyToSubmit) {
			addItem(values)
			dispatchForm({ type: 'CLEAR' })
		}
	}, [addItem, isFormReadyToSubmit, values])

	const onChange = e => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value },
		})
	}

	const addJournalItem = e => {
		e.preventDefault()
		dispatchForm({ type: 'SUBMIT' })
	}

	return (
		<>
			<form className={styles['journal-form']} onSubmit={addJournalItem}>
				<div
					className={cn([], {
						[styles['invalid']]: !isValid,
						[styles['input__wrapper']]: isValid,
					})}
				>
					<input
						type='text'
						name='title'
						ref={titleRef}
						placeholder='Название'
						value={values.title}
						onChange={onChange}
						className={cn(styles['input-title'], styles['input'])}
					/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor='tag' className={styles['form-lables']}>
						<img src='/tag.svg' alt='Метки' />
						<span className={styles['form-lables__title']}>Метки</span>
					</label>
					<input
						placeholder='Куда относится?'
						value={values.tag}
						onChange={onChange}
						className={styles['input']}
						type='text'
						name='tag'
					/>
				</div>
				<textarea
					value={values.text}
					onChange={onChange}
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

import { useContext, useEffect, useReducer, useRef } from 'react'
import Button from '../Button/Button'
import cn from 'classnames'
import styles from './JournalForm.module.css'
import { INITIAL_STATE, formReducer } from './JournalForm.state'
import Input from '../Input/Input'
import { UserContext } from '../../context/user.context'

const JournalForm = ({ addItem, data, deleteItem }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const { isValid, values, isFormReadyToSubmit } = formState
	const { userId } = useContext(UserContext)
	const titleRef = useRef()

	useEffect(() => {
		if (!data) {
			dispatchForm({ type: 'CLEAR' })
			dispatchForm({ type: 'SET_VALUE', payload: { userId } })
		}
		dispatchForm({ type: 'SET_VALUE', payload: { ...data } })
	}, [data, userId])

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
			dispatchForm({ type: 'SET_VALUE', payload: { userId } })
		}
	}, [addItem, isFormReadyToSubmit, userId, values])
	useEffect(() => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { userId },
		})
	}, [userId])
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

	const deleteJournalItem = () => {
		deleteItem(data.id)
		dispatchForm({ type: 'CLEAR' })
		dispatchForm({ type: 'SET_VALUE', payload: { userId } })
	}

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div
				className={cn([styles['journal-form__top-flex']], {
					[styles['invalid']]: !isValid,
					[styles['input__wrapper']]: isValid,
				})}
			>
				<Input
					appearence={'title'}
					name='title'
					type='text'
					ref={titleRef}
					value={values.title}
					placeholder='Название'
					onChange={onChange}
				/>
				{data?.id && (
					<button
						type='button'
						className={styles['journal-form__delete']}
						onClick={deleteJournalItem}
					>
						<img src='./basket.svg' alt='Корзина' />
					</button>
				)}
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-lables']}>
					<img src='/tag.svg' alt='Метки' />
					<span className={styles['form-lables__title']}>Метки</span>
				</label>
				<Input
					value={values.tag}
					name='tag'
					placeholder='Тег'
					onChange={onChange}
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
	)
}

export default JournalForm

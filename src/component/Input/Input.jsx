import { forwardRef } from 'react'
import cn from 'classnames'
import styles from './Input.module.css'

const Input = forwardRef(function Input(
	{ appearence, type, value, placeholder, onChange, ...props },
	ref
) {
	return (
		<input
			{...props}
			ref={ref}
			type={type}
			name='title'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={cn(styles['input'], {
				[styles['input-title']]: appearence === 'title',
			})}
		/>
	)
})
export default Input

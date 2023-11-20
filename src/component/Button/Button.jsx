import './Button.css'

const Button = ({ onClick }) => {
	return (
		<button onClick={onClick} className='button accept'>
			Сохранить
		</button>
	)
}

export default Button

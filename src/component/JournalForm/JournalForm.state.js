/* eslint-disable indent */
export const INITIAL_STATE = {
	isValid: true,
	values: {
		userId: '',
		title: '',
		tag: '',
		text: '',
		date: '',
	},
	isFormReadyToSubmit: false,
}

export function formReducer(state, action) {
	switch (action.type) {
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } }
		case 'RESET_VALIDITY':
			return {
				...state,
				isValid: INITIAL_STATE.isValid,
				isFormReadyToSubmit: INITIAL_STATE.isFormReadyToSubmit,
			}
		case 'SUBMIT': {
			const titleValidity = state.values.title.trim().length
			return {
				values: state.values,
				isValid: !!titleValidity,
				isFormReadyToSubmit: !!titleValidity,
			}
		}
		case 'CLEAR': {
			return {
				isValid: INITIAL_STATE.isValid,
				values: INITIAL_STATE.values,
				isFormReadyToSubmit: INITIAL_STATE.isFormReadyToSubmit,
			}
		}
	}
}

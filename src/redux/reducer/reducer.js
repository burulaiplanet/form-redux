const initialState = {
	expenses: [
		{
			title: 'Text',
			price: 180,
			date: '2022-05-01',
			id: 123123,
		},
	],
}

let nextId = 0
export const expenseReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				expenses: [
					...state.expenses,
					{
						title: action.title,
						price: action.price,
						date: action.date,

						id: nextId++,
					},
				],
			}
		case 'DELETE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.id,
				),
			}
		default:
			return state
	}
}

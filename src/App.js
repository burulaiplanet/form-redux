import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addExpense } from './redux/actions/action'
import Form from './components/Form'
import NewForm from './components/NewForm'
import styled from 'styled-components'

const Section = styled.section`
	background-color: cadetblue;
	border-radius: 20px;
	width: 400px;
	
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 100px auto;


`

function App() {
	const dispatch = useDispatch()

	const expenses = useSelector((state) => state.expenses)
	console.log(expenses)

	const [data, setData] = useState({
		title: '',
		price: '',
		date: '',
	})

	let formIsValid =
		data.title.trim() !== '' &&
		data.price.trim() !== '' &&
		data.date.trim() !== ''

	const inputHandler = (e) => {
		const value = e.target.value
		setData({
			...data,
			[e.target.name]: value,
		})
		console.log(data)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(addExpense(data))
		setData({
			title: '',
			price: '',
			date: '',
		})
	}

	return (
		<Section>
			<h1>Redux Practice</h1>
			<Form
				onSubmit={submitHandler}
				onData={data}
				onInput={inputHandler}
				onValid={formIsValid}
			/>
			<NewForm />
		</Section>
	)
}

export default App

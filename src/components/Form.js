// import Input from  './Input'
import styled from 'styled-components'
const FormControl = styled.div`
	& div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	& button {
		width: 100px;
		height: 25px;
		border-radius: 5px;
		border: none;
		color: black;
		box-shadow: 2px 3px 5px black;
	}
`
const Input = styled.input`
	width: 300px;
	height: 20px;
	border-radius: 5px;
	outline: none;
	border: none;
	margin-bottom: 10px;
	box-shadow: 2px 3px 5px black;
`
const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			<FormControl>
				<div className='control'>
					<label>Title</label>
					<Input
						value={props.onData.title}
						type='text'
						name='title'
						onChange={props.onInput}
					/>
				</div>
				<div className='control'>
					<label>Price</label>
					<Input
						value={props.onData.price}
						type='text'
						name='price'
						onChange={props.onInput}
					/>
				</div>

				<div className='control'>
					<label>Date</label>
					<Input
						value={props.onData.date}
						type='text'
						name='date'
						onChange={props.onInput}
					/>
				</div>
				<button disabled={!props.onValid}>Add</button>
			</FormControl>
		</form>
	)
}

export default Form

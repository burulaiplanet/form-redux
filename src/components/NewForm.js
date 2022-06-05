import { useDispatch, useSelector } from "react-redux"
import { deleteExpense } from '../redux/actions/action'
import styled from 'styled-components'

const Ul=styled.ul`
list-style: none;
& li{
	margin-top: 5px;
	margin-left: -40px;
	background-color: white;
	color: cadetblue;
	border-radius: 5px;
	width: 300px;
	height: 30px;
	box-shadow: 2px 3px 5px black;
	display: flex;
	justify-content: space-between;
}
`
const NewForm=()=>{
	const dispatch=useDispatch()
	const expenses=useSelector(state=>state.expenses)
	const deleteHandler = (id) => {
		dispatch(deleteExpense(id))
	}
    return(
<Ul>
				{expenses.map((item) => {
					return (
						<li key={item.id}>
							<span>{item.title}</span>
							<span>{item.price}</span>
							<span>{item.date}</span>
							<span onClick={()=>deleteHandler(item.id)}>❌</span>
						</li>
					)
				})}
			</Ul>
    )
}
export default NewForm
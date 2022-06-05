export const addExpense=({title,date,price})=>({
    type:'ADD',
    price:price,
    title:title,
    date:date,
   
})

export const deleteExpense=(id)=>({
    type:"DELETE",
    id:id
})
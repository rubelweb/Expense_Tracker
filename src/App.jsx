import './App.css'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import { useState, useEffect } from 'react'

function App() {
    const [expenses, setExpenses] = useState([])
    const [totalExpense, setTotalExpense] = useState(0)

    useEffect(() => {
        const total = expenses.reduce((acc, curr) => acc + curr.amount, 0)
        setTotalExpense(total)
    }, [expenses])

    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    }

    console.log(JSON.stringify(expenses))

    return (
        <>
            <div>
                <h1>Expense Tracker</h1>
                <ExpenseForm onAddExpense={addExpense} />
                <h2>Total Expense: {totalExpense}</h2>
            </div>
        </>
    )
}

export default App

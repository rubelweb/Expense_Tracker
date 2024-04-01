import './App.css'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import { useState, useEffect } from 'react'
import ExpenseList from './components/ExpenseList/ExpenseList'

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

    const onDeleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id))
    }

    return (
        <>
            <div>
                <h1>Expense Tracker</h1>
                <ExpenseForm onAddExpense={addExpense} />
                <ExpenseList
                    expenses={expenses}
                    onDeleteExpense={onDeleteExpense}
                />
                <h2>Total Expense: {totalExpense}</h2>
            </div>
        </>
    )
}

export default App

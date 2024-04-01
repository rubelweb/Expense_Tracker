import { useState } from 'react'
import PropTypes from 'prop-types'

function ExpenseForm({ onAddExpense }) {
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [nextId, setNextId] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newExpense = {
            id: nextId,
            description,
            amount: parseFloat(amount),
            date: new Date().toDateString()
        }

        onAddExpense(newExpense)

        setAmount('')
        setDescription('')
        setNextId(nextId + 1)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="string"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></input>{' '}
                <input
                    type="number"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    required
                ></input>{' '}
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}

ExpenseForm.propTypes = {
    onAddExpense: PropTypes.func.isRequired
}

export default ExpenseForm

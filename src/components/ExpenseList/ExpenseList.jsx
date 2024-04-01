import PropTypes from 'prop-types'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <div>
            <h3>Expenses:</h3>

            <div>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onDelete={onDeleteExpense}
                    />
                ))}
            </div>
        </div>
    )
}

ExpenseList.propTypes = {
    expenses: PropTypes.array.isRequired,
    onDeleteExpense: PropTypes.func.isRequired
}

export default ExpenseList

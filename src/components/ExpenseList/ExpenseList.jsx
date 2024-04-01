import PropTypes from 'prop-types'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function ExpenseList({ expenses }) {
    return (
        <div>
            <h2>Expenses</h2>

            <ul>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} />
                ))}
            </ul>
        </div>
    )
}

ExpenseList.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default ExpenseList

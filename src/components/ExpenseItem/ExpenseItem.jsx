import PropTypes from 'prop-types'
function ExpenseItem({ expense, onDelete }) {
    return (
        <div>
            <li>
                <span>
                    {expense.description} - {expense.amount} kr
                </span>{' '}
                <button onClick={() => onDelete(expense.id)}>Delete</button>
            </li>
        </div>
    )
}

ExpenseItem.propTypes = {
    expense: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ExpenseItem

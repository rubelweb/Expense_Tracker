import PropTypes from 'prop-types'
function ExpenseItem({ expense }) {
    return (
        <div>
            <li>
                <span>
                    {expense.description} - {expense.amount} kr
                </span>
            </li>
        </div>
    )
}

ExpenseItem.propTypes = {
    expense: PropTypes.object.isRequired
}

export default ExpenseItem

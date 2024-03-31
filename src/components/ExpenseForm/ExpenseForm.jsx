function ExpenseForm() {
    return (
        <div>
            <form>
                <input type="string" placeholder="Description" required></input>{' '}
                <input type="number" placeholder="Amount" required></input>{' '}
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm

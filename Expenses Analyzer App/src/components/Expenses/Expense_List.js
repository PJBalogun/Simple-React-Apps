import './Expense_List.css';
import ExpenseItem from './Expense_Item';

const ExpenseList = props => {
    let expenseItem = <h2 className="expenses-list-fallback">No available expenses</h2>;
    if (props.items.length > 0) {
        expenseItem = props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <ul className="expense-list">
            {expenseItem}
        </ul>
    )
};

export default ExpenseList;
import React from 'react';

import ExpenseForm from './Expense_Form';
import './New_Expense.css';


const NewExpense = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
        </div>
    )
}

export default NewExpense;
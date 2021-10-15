import React, { useState } from 'react';
import './Expense_Form.css';


let ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangehandler = (event) => {
        setEnteredTitle(event.target.value);

    }
    const amountChangehandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        console.log("Now in expanse form");
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangehandler}

                    />
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangehandler}
                    />
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangehandler}
                    />
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expanse</button>
            </div>
        </form>
    )
}

export default ExpenseForm;

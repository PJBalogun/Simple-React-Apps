// Component in react is a Javascript Function;
//Imports
import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './Expense_Date';
import './Expense_Item.css';

// Note that state is seprated on a per component basis
//i.e for everywhere ExpenseItem is called state change for one doesn't affect the others
const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className="expense-item-price">{"$" + props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
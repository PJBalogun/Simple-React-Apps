//Imports
import React, { useState } from 'react';
import ExpenseList from './Expense_List';
import ExpenseFilter from "./Expense_Filter";
import ExpenseChart from './Expenses_Chart';
import './Expenses.css';
import Card from "../UI/Card";




const Expenses = (props) => {

    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangedHandler = (selectedyear) => {
        setFilterYear(selectedyear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangedFilter={filterChangedHandler}
            />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList
                items={filteredExpenses}
            />
        </Card>
    );
}

export default Expenses;
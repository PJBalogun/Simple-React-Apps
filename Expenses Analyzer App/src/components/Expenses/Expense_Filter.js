import React from 'react';

import './Expense_Filter.css';

const ExpenseFilter = (props) => {

    const dropdownChangedHandler = (event) => {
        props.onChangedFilter(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter-control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangedHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;
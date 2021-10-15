import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

const MealItemForm = props => {
    const inputAmountRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true)
    const submitFormHandler = (event) => {
        event.preventDefault();
        let enteredAmount = inputAmountRef.current.value;
        let enteredAmountNumber = +enteredAmount;
        if (+enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || +enteredAmountNumber < 0) {
            setAmountIsValid(true);
            return;
        }
        props.onAddTocart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitFormhandler}>
            <Input label="Amount" input={{
                id: `${props.id}`,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} ref={inputAmountRef} />
            <button>+ Add</button>
            {!amountIsValid && <p>Enter amount between 1 and 5</p>};
        </form>
    )
};
export default MealItemForm;
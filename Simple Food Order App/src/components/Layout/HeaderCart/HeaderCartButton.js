import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import CartContext from '../../../store/CartContext';


const HeaderCartButton = (props) => {
    const cardCtx = useContext(CartContext);
    const [itemIsAdded, setItemIsAdded] = useState();
    const { items } = cardCtx;
    const totalCardItem = items.reduce((currNumber, item) => { return currNumber + item.amount }, 0);

    let btnClasses = `${classes.button} ${itemIsAdded ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length === 0)
            return;
        setItemIsAdded(true);
        let timer = setTimeout(() => {
            setItemIsAdded(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items])


    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalCardItem}</span>
        </button>
    )
};
export default HeaderCartButton;
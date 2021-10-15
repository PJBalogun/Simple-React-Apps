import { useReducer } from "react";
import CartContext from "./CartContext";
let defaultCartState = {
    items: [],
    totalAmount: 0,
    IsAdded: false
};

let cartReducer = (state, action) => {
    if (action.type === "Add") {
        const updatedTotalAmount = state.totalAmount + action.cartItem.amount * action.cartItem.price;

        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.cartItem.id
        });
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItem;
        let updatedItems;
        if (existingCartItemIndex !== -1) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.cartItem.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.cartItem);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            IsAdded: true
        };
    }
    if (action.type === "Remove") {
        let updatedItems;
        let updatedItem;
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.cartId;
        });
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        if (existingCartItem.amount === 1)
            updatedItems = state.items.filter(item => item.id !== action.cartId);
        else if (existingCartItem.amount < 1) {
            return defaultCartState;
        }
        else {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return defaultCartState;
}
const Cartprovider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = item => {
        dispatchCart({ type: "Add", cartItem: item })
    };
    const removeItemFromCartHandler = id => {
        dispatchCart({ type: "Remove", cartId: id })
    };
    const cartContext = {
        items: cartState,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default Cartprovider;
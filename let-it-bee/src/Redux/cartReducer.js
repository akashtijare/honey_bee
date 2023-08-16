import { ADD_TO_CART, CLEAR_CART, DECREMENT_QUANTITY, DELETE_ITEM, INCREMENT_QUANTITY } from "./actionTypes";

const initialstate={
    cartItems:[]
}
const reducer = (state=initialstate, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem = action.payload;
            const itemInCart = state.cartItems.find(item => item.id === newItem.id);

            if(itemInCart){
                // if the item is already in cart we need to update the card and not push the new item,
                const updatedCartItems = state.cartItems.map(item => {
                    if(item.id === newItem.id){
                        return {
                            ...item,
                            quantity: item.quantity + newItem.quantity
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    cartItems: updatedCartItems
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                }
            }
        
        case INCREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)
            }

        case DECREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
            }


        case DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }

        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            }
        
        default : 
            return state;
    }

}

export default reducer;
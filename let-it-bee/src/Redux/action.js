import { ADD_TO_CART, CLEAR_CART, DECREMENT_QUANTITY, DELETE_ITEM, INCREMENT_QUANTITY, LOGIN_SUCCESS } from "./actionTypes"



export const handleLogin = () => {
	return {
		type: LOGIN_SUCCESS,
	}
}

export const handleAddToCart = ({id, quantity, price, image, name}) => {
	return {
		type: ADD_TO_CART,
		payload: {
			id: id,
			quantity: quantity,
			price: price,
			image: image,
			name: name
		}
	}
}

export const handleIncreaseQuantity = (id) => {
	return {
		type: INCREMENT_QUANTITY,
		payload: id,
	}
}


export const handleDecreaseQuantity = (id) => {
	return {
		type: DECREMENT_QUANTITY,
		payload: id,
	}
}

export const handleDeleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id,
	}
}

export const handleClearCart = () => {
	return {
		type: CLEAR_CART,
	}
}
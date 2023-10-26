export function addItem(newItem) {
    return {
        type: 'ADD_ITEM',
        payload: newItem,
    };
}

export function deleteItem(pizzaId) {
    return {
        type: 'DELETE_ITEM',
        payload: pizzaId,
    };
}

export function increaseItemQuantity(pizzaId) {
    return {
        type: 'INCREASE_ITEM_QUANTITY',
        payload: pizzaId,
    };
}

export function decreaseItemQuantity(pizzaId) {
    return {
        type: 'DECREASE_ITEM_QUANTITY',
        payload: pizzaId,
    };
}

export function clearCart() {
    return {
        type: 'CLEAR_CART',
    };
}

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) => state.cart.cart.find((item) => item._id === id)?.quantity ?? 0;

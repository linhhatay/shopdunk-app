import { calculateDiscountedPrice } from '~/utils/helpers';

export function addItem(newItem) {
    return {
        type: 'ADD_ITEM',
        payload: newItem,
    };
}

export function deleteItem(productId) {
    return {
        type: 'DELETE_ITEM',
        payload: productId,
    };
}

export function increaseItemQuantity(productId) {
    return {
        type: 'INCREASE_ITEM_QUANTITY',
        payload: productId,
    };
}

export function decreaseItemQuantity(productId) {
    return {
        type: 'DECREASE_ITEM_QUANTITY',
        payload: productId,
    };
}

export function clearCart() {
    return {
        type: 'CLEAR_CART',
    };
}

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => {
        const priceWithoutCurrency = calculateDiscountedPrice(item.color.price, item.discount).replace(/[^\d.]/g, '');
        return sum + parseFloat(priceWithoutCurrency.replaceAll('.', '')) * item.quantity;
    }, 0);

export const getCurrentQuantityById = (id, colorName) => (state) =>
    state.cart.cart.find((item) => item._id === id && item.color.name === colorName)?.quantity ?? 0;

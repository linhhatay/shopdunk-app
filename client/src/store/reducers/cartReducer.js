const initialState = {
    cart: [],
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.cart.findIndex(
                (item) => item._id === action.payload._id && item.color.name === action.payload.color.name,
            );
            if (existingItem !== -1) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item,
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload),
            };
        case 'INCREASE_ITEM_QUANTITY':
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item._id === action.payload._id && item.color.name === action.payload.color.name
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item,
                ),
            };
        case 'DECREASE_ITEM_QUANTITY':
            const updatedCart = state.cart.map((item) => {
                if (item._id === action.payload._id && item.color.name === action.payload.color.name) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });

            const updatedCartFiltered = updatedCart.filter((item) => item.quantity > 0);

            if (updatedCartFiltered.length < state.cart.length) {
                return {
                    ...state,
                    cart: updatedCartFiltered,
                };
            }

            return {
                ...state,
                cart: updatedCart,
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
}

export default cartReducer;

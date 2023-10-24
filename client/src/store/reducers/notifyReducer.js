const initialState = {
    message: '',
    status: '',
};

const notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFY':
            return {
                message: action.payload.message,
                status: action.payload.status,
            };
        case 'CLEAR_NOTIFY':
            return initialState;
        default:
            return state;
    }
};

export default notifyReducer;

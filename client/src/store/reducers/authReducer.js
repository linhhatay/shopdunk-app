const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    forgotPasswordData: null,
    resetPasswordData: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGIN_FAILURE':
        case 'REGISTER_FAILURE':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            };
        case 'LOGOUT':
            return initialState;

        case 'FORGOT_PASSWORD_SUCCESS':
            return { ...state, forgotPasswordData: action.payload };

        case 'FORGOT_PASSWORD_FAILURE':
            return { ...state, forgotPasswordData: null };

        case 'RESET_PASSWORD_SUCCESS':
            return { ...state, isAuthenticated: true, user: action.payload.user, token: action.payload.token };

        case 'RESET_PASSWORD_FAILURE':
            return { ...state, resetPasswordData: null };

        default:
            return state;
    }
};

export default authReducer;

import * as httpRequest from '~/utils/httpRequest';

export const login = (credentials) => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        const response = await httpRequest.post('/users/login', credentials);

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user: response.data.user, token: response.token },
        });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'CLEAR_NOTIFY',
        });

        return true;
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE' });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: error.message,
                status: 'FAILURE',
            },
        });
        return false;
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        await httpRequest.get('/users/logout');

        dispatch({ type: 'LOGOUT' });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'CLEAR_NOTIFY',
        });
    } catch (error) {
        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: error.message,
                status: 'FAILURE',
            },
        });
    }
};

export const register = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        const response = await httpRequest.post('/users/signup', data);

        dispatch({ type: 'REGISTER_SUCCESS', payload: { user: response.data.user, token: response.token } });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'CLEAR_NOTIFY',
        });

        return true;
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE' });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: error.message,
                status: 'FAILURE',
            },
        });

        return false;
    }
};

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        const response = await httpRequest.post('/users/forgotPassword', email);

        dispatch({ type: 'FORGOT_PASSWORD_SUCCESS', payload: response.data.resetToken });

        dispatch({ type: 'CALL_API_END' });
    } catch (error) {
        dispatch({ type: 'FORGOT_PASSWORD_FAILURE' });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: error.message,
                status: 'FAILURE',
            },
        });

        throw error;
    }
};

export const resetPassword =
    ({ password, passwordConfirm, resetToken }) =>
    async (dispatch) => {
        try {
            dispatch({ type: 'CALL_API_START' });

            const response = await httpRequest.patch(`/users/resetPassword/${resetToken}`, {
                password,
                passwordConfirm,
            });

            dispatch({ type: 'RESET_PASSWORD_SUCCESS', payload: response });

            dispatch({
                type: 'CLEAR_NOTIFY',
            });

            dispatch({ type: 'CALL_API_END' });

            return true;
        } catch (error) {
            dispatch({ type: 'RESET_PASSWORD_FAILURE' });

            dispatch({ type: 'CALL_API_END' });

            dispatch({
                type: 'SET_NOTIFY',
                payload: {
                    message: error.message,
                    status: 'FAILURE',
                },
            });
            throw error;
        }
    };

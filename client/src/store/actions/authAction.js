import * as httpRequest from '~/utils/httpRequest';

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

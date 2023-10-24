export const setNotify = (message, status) => ({
    type: 'SET_NOTIFY',
    payload: {
        message,
        status,
    },
});

export const clearNotify = () => ({
    type: 'CLEAR_NOTIFY',
});

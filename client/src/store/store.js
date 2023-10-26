import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import notifyReducer from './reducers/notifyReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    notify: notifyReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store };

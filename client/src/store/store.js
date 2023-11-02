import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import notifyReducer from './reducers/notifyReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';

const persistConfig = {
    key: 'rootClient',
    storage,
};

const rootReducer = combineReducers({
    notify: notifyReducer,
    cart: cartReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };

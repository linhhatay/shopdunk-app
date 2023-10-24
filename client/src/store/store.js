import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import notifyReducer from './reducers/notifyReducer';

const rootReducer = combineReducers({
    notify: notifyReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store };

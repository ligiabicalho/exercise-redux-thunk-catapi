import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducer from './reducers/gallery';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

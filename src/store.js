import { createStore, combineReducers } from 'redux';
import footerReducer from './footer/footer.reducer';

const appReducer = combineReducers({
  footer: footerReducer,
});

const store = createStore(appReducer);

export default store;

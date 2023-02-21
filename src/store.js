import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import footerReducer from './footer/footer.reducer';
import boardReducer from './board/board.reducer';

const appReducer = combineReducers({
  board: boardReducer,
  footer: footerReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;

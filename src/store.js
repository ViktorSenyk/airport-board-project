import { createStore, combineReducers } from 'redux';
import footerReducer from './footer/footer.reducer';
import boardReducer from './board/board.reducer';

const appReducer = combineReducers({
  board: boardReducer,
  footer: footerReducer,
});

const store = createStore(appReducer);

export default store;

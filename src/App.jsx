import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './header/components/Header';
import Footer from './footer/components/Footer';
import Board from './board/components/Board';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Board />
      </main>
      <Footer />
    </Provider>
  );
}

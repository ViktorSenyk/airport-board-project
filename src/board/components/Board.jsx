import React from 'react';
import Search from './Search';
import Filter from './Filter';

import '../styles/board.scss';

export default function Board() {
  return (
    <section className="board">
      <div className="container">
        <Search />
        <div className="board__content">
          <Filter />
        </div>
      </div>
    </section>
  );
}

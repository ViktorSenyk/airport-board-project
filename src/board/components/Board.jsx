import React from 'react';
import Search from './Search';
import Filter from './Filter';
import Table from './Table';

import '../styles/board.scss';

export default function Board() {
  return (
    <section className="board">
      <div className="container">
        <Search />
        <div className="board__content">
          <Filter />
          <Table />
        </div>
      </div>
    </section>
  );
}

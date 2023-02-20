import React from 'react';
import Search from './Search';

import '../styles/search.scss';

export default function Board() {
  return (
    <section className="board">
      <div className="container">
        <Search />
      </div>
    </section>
  );
}

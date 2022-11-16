import React from 'react'

export default function form (props) {
  const{movie}= props;

  return (
    <form>
        <h3>{movie.name}</h3>
        <button>-</button>
        <button>+</button>
    </form>
  );
}


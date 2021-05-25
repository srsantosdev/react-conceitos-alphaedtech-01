import React from 'react';

function Student(props) {
  return (
    <li>
      <strong>{props.alpha.name}</strong>
      <p>{props.alpha.age}</p>
    </li>
  )
}

export default Student
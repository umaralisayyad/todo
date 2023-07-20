import React from 'react';
import css from './App.css';
import Delete from './Delete.svg'

function List(props) {
  return (
    <div>
      <ol>
        <li>{props.items} 
        <button onClick={e=>{props.deleteitem(props.index)}}>
          <img src={Delete} /></button>
        </li>
      </ol>
    </div>
  )
}

export default List;

import React, { useState } from 'react'
import css from './Todo.css'

function Todo(props) {

    const [input,setInput] = useState('');

  return (
    <div >
      <h1 className='text-center mt-5'> 
      <i>
      Type to add things in Todays List</i>
      </h1>


      <div className= 'd-flex justify-content-center'>
      <input id='input' value={input} onChange={e=>{setInput(e.target.value)}} className='form-control mt-5 w-75 rounded-pill '/>
      </div>
      <div className=' mt-4 d-flex justify-content-center'>
      <button className='btn btn-1 btn-primary rounded-pill w-50 ' onClick={()=> {props.addlist(input);setInput('')}}>Add</button>
      </div>
      <h2>
        {input}
      </h2>
    </div>
  )
}

export default Todo ;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Todo from './Todo';
import List from './List';

function App() {
   const [list,setList] = useState([]);
   let addList = (input) => {
     setList([...list,input])
    };


   const deleteItem = (key) =>{
    let newListitem = [...list];
    newListitem.splice(key,1)
    setList([...newListitem])
   }
  return (
    <>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <h1>
           To-Do List
            </h1>
            </Navbar.Brand>
        </Container>
      </Navbar>
      <Todo addlist = {addList}/>
      {
        list.map ((listItem,i)=>{
          return(
          <>
            <List keys={i} index = {i} items = {listItem} deleteitem={deleteItem} />
          </>
          )
        })
      }
    </>
  );
}

export default App;

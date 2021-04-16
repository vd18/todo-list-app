
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import { db } from './firebase_config';
import firebase from "firebase";

import { ListItem, ListItemText } from '@material-ui/core';

function App() {
  const [todos , settodos] = useState([]);
  const [todoinput, settodo] = useState("");

  useEffect(() => {
      getwork();

  } ,[])


  function getwork(){
        db.collection("todos").onSnapshot(function (querySnapshot){
          settodos(
            querySnapshot.docs.map((doc) => ({
               id: doc.id,
              todo: doc.data().todo,
              inprocess : doc.data().inprocess
          })))
        })
  }


  function addtodo(event) {
    event.preventDefault();
   
    db.collection("todos").add({
      inprocess: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoinput,
    })
    settodo("");
  }



  function togglein(todo){

    db.collection("todos").doc(todo.id).update({
        inprocess : !todo.inprocess,
    });
  }



  function deleteitem(todo){

    db.collection("todos").doc(todo.id).delete();
  }

  return (
    <div className="App">

      <h1>TODo App</h1>
      <form onSubmit={addtodo}>
        <TextField type="input"
          value={todoinput}
          onChange={(e) => settodo(e.target.value)}
          id="standard-basic"
          label="Add Todo List" />
  <div class = "abc">
          <Button type="submit" variant="contained"
            color="primary"
            >

            Default</Button>
            </div>
      </form>

{todos.map((todo) => (
    <div class = "rrr"
style={{ display: "flex"}}>

      <ListItem>
        <ListItemText primary={todo.todo} secondary={todo.inprocess ? "in process" : "completed"}>
        </ListItemText>
      </ListItem>
      <Button onClick={() => togglein(todo)}>{todo.inprocess ? "Done" : "Undone"}</Button>
      <Button onClick={() => deleteitem(todo)}>x</Button>


      
   
 
  
   </div>


))}
    </div>
  );


}

export default App;

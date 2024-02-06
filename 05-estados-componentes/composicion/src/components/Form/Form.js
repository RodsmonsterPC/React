import { useState } from "react";
import TodoList from "./todoList";
import index from "../index.css";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [payload, setPayload] = useState([]);

  const changeTodo = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let listNew = [...payload, todo];
    setPayload(listNew);
  };

  const deleteList = (i) => {
    const newList = payload.filter((value, index) => {
      if (index !== i) {
        return value;
      }
    });
    setPayload(newList);
  };

  const deleteAll = () => {
    setPayload([]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={changeTodo}></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        <TodoList payload={payload} erase={deleteList} />
      </div>
      <button onClick={deleteAll}>Erase all</button>
    </div>
  );
};

export default Form;

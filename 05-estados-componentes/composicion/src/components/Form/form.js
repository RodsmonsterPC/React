import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState("");

  const changeTodo = (e) => setTodo(e.target.value);
  const [payload, setPayload] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayload({ todo });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={changeTodo}></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        <todoList />
      </div>
    </div>
  );
};

export default Form;

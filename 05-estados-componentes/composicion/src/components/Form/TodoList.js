const TodoList = ({ payload, erase }) => {
  return (
    <div>
      <ul>
        To do list:
        {payload.map((todoList, index) => (
          <li>
            {todoList} <button onClick={() => erase(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

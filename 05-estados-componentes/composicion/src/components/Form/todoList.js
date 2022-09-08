const TodoList = ({ payload, erase }) => {
  return (
    <div>
      <ul>
        To do list:
        {payload.map((column, index) => (
          <li>
            {column} <button onClick={() => erase(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

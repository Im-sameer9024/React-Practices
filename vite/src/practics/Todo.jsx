import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, { data: input, id: Date.now() }]);
  }

  function deleteHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editHandler(id, newText){
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, data: newText };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <div>
      <div>
        <input
          type="text"
          className=" outline"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" bg-green-500 px-3 py-1" onClick={() => addTodo()}>
          Submit
        </button>
      </div>
      <div>
        {todos.map((item) => (
          <li key={item.id}>
            {item.data}{" "}
            <button
              onClick={() => deleteHandler(item.id)}
              className=" bg-red-800 text-white px-2"
            >
              Delete
            </button>{" "}
            <button
              onClick={() =>
                editHandler(
                  item.id,
                  prompt("Enter the update value", item.data)
                )
              }
              className=" bg-yellow-500 text-white px-2"
            >
              Edit
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

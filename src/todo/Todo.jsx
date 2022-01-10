import { useCallback } from "react";
import { useState } from "react";
import TodoItem, {
  MemoisedTodoItem,
  MemoisedTodoItemWithoutComparator,
} from "./TodoItem";

export default function TodoInput() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState(null);

  const handleTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
        verify: false,
      },
    ]);
  };

  // const handleToggle = (id) => {
  //   console.log(id);
  //   const updatedData = todos.map((item) =>
  //     item.id === id ? { ...item, verify: !item.verify } : item
  //   );

  //   setTodos(updatedData, []);
  // };

    const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, verify: !item.verify } : item
      )
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        margin: "auto",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Add Something"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleTodo(title)}>ADD</button>
      {todos?.map((item) => (
        <MemoisedTodoItemWithoutComparator data={item} key={item.id} onToggle={handleToggle} />
      ))}
    </div>
  );
}

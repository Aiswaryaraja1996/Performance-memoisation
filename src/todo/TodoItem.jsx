import { memo, useMemo } from "react";

const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return Math.floor(Math.random() * 16777215).toString(16);
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.status === nextProps.status) {
    return true;
  }
  return false;
};

export default function TodoItem({ data, onToggle }) {
  //* useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

  const randomClr = useMemo(() => delay(2000), []);

  //! Without any optimisation
  //   const randomClr = delay(2000);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "0.5rem",
        padding: "1rem",
      }}
    >
      <div style={{ backgroundColor: "#" + randomClr, padding: "0.5rem" }}>
        {data.id}
      </div>
      <p>{data.title}</p>
      <button onClick={() => onToggle(data.id)}>{`${data.verify}`}</button>
    </div>
  );
}

export const MemoisedTodoItemWithoutComparator = memo(TodoItem);
export const MemoisedTodoItem = memo(TodoItem, areEqual);

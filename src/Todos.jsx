import {memo} from "react";

function Todos({ todos, addTodo }) {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}

export default memo(Todos);

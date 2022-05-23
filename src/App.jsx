import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  //入力した値をstateで持つ
  const [todoText, setTodoText] = useState("");
  //未完了に追加する配列を作る
  const [incompTodo, setIncompTodo] = useState([]);

  //変更したときstateを変更する関数
  const onChangeTodo = (e) => setTodoText(e.target.value);
  //追加ボタンを押したとき未完了の配列にセットする関数
  const onChlickAdd = () => {
    if (todoText === "") return;
    const setNewTodo = [...incompTodo, todoText];
    setIncompTodo(setNewTodo);
    setTodoText("");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <input
          type="text"
          placeholder="ここに入力"
          value={todoText}
          onChange={onChangeTodo}
        />
        <button onClick={onChlickAdd}>追加</button>
      </div>
    </div>
  );
};

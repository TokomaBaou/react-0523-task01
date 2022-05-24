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
    // 未完了に追加
    const setNewTodo = [...incompTodo, todoText];
    setIncompTodo(setNewTodo);
    // 入力したステートを空にする
    setTodoText("");
    console.log(incompTodo);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="ここに入力"
          value={todoText}
          onChange={onChangeTodo}
        />
        <button onClick={onChlickAdd}>追加</button>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          {incompTodo.map((v, i) => {
            <div key={i}>
              <li>
                <p>{v}</p>
              </li>
            </div>;
          })}
          <li>koko</li>
        </ul>
      </div>
    </div>
  );
};

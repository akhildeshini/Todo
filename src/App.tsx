import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import { useState, useId } from "react";
import Content from "./Content";
import Active from "./Active";
function App() {
  const [todo, settodo] = useState<
    { id: number; task: string; status: string }[]
  >([]);
  const [fi, setfilter] = useState<
    { id: number; task: string; status: string }[]
  >([]);
  const [check, setcheck] = useState(false);
  const update = (val: string, id: number) => {
    settodo((p) => [{ id: id, task: val, status: "in progress" }, ...p]);
  };
  const updact = () => {};
  const del = (id: number) => {
    const findindex = todo.findIndex((p) => p.id === id);
    console.log("find index", findindex, id);
    console.log("arr in app", todo);
    const newarr = todo;
    newarr.splice(findindex, 1);
    settodo([...newarr]);
  };
  const updcheck = (id: number, val: string) => {
    const updarr = todo.map((p) => {
      if (p.id === id) {
        return { ...p, status: val };
      }
      return p;
    });
    console.log("updarr", updarr);
    settodo([...updarr]);
  };
  const Act = () => {
    let newarr = todo.filter((p) => p.status == "completed");
    setfilter([...newarr]);
    setcheck(true);
  };
  const comp = () => {
    setcheck(false);
  };
  return (
    <div className="white">
      <h1>Add the Tasks yahho</h1>
      <Todo upd={update} />
      {!check && <Content arr={todo} del={del} upcheck={updcheck} act={Act} />}
      {check && <Active arr={fi} comp={comp} />}
    </div>
  );
}

export default App;

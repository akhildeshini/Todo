import "./Contclass.css";
import { useState } from "react";
import Active from "./Active";
const Content: React.FC<{
  arr: {
    id: number;
    task: string;
    status: string;
  }[];
  del: (val: number) => void;
  upcheck: (id: number, val: string) => void;
  act: () => void;
}> = ({ arr, del, upcheck, act }) => {
  const can = (id: number) => {
    console.log("arr is", arr);
    const obj = arr.find((p) => p.id == id);
    console.log("obj is that", obj);
    del(id);
  };
  const updcheck = (id: number) => {
    const find = arr.find((p) => p.id === id);
    let val = "";
    console.log("findindex", find?.status);
    if (find?.status == "completed") {
      val = "in progress";
    } else {
      val = "completed";
    }
    upcheck(id, val);
  };
  const updact = () => {
    act();
  };
  const com = () => {};
  return (
    <ul className="page">
      {arr.map((p) => {
        return (
          <>
            <li key={p.id} className="link">
              <input
                type="checkbox"
                className="check"
                onChange={() => updcheck(p.id)}
                checked={p.status == "completed" ? true : false}
              />
              <p>{p.task}</p>
              <button className="ctbtn" onClick={() => can(p.id)}>
                {" "}
                *{" "}
              </button>
            </li>
          </>
        );
      })}
      <button className="act" onClick={updact}>
        Active
      </button>
      <button className="act" onClick={com}>
        Completed
      </button>
    </ul>
  );
};
export default Content;

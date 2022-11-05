import "./Contclass.css";
import { useState } from "react";
const Active: React.FC<{
  arr: {
    id: number;
    task: string;
    status: string;
  }[];
  comp: () => void;
}> = ({ arr, comp }) => {
  const com = () => {
    comp();
  };
  const [chck, setchk] = useState(true);
  return (
    <ul className="page">
      {arr.map((p) => {
        return (
          <>
            <li key={p.id} className="link">
              <input type="checkbox" className="check" defaultChecked={chck} />
              <p>{p.task}</p>
              <button className="ctbtn"> * </button>
            </li>
          </>
        );
      })}
      <button className="act">Active</button>
      <button className="act" onClick={com}>
        Completed
      </button>
    </ul>
  );
};
export default Active;

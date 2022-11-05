import "./Todo.css";
import { useRef, useId } from "react";
const Todo: React.FC<{ upd: (val: string, id: number) => void }> = ({
  upd,
}) => {
  const id = Math.floor(Math.random() * 100);
  const ref = useRef<HTMLInputElement>(null);
  const sub = () => {
    const val = "" + ref.current?.value;
    console.log(val);
    upd(val, id);
  };
  return (
    <div className="divid">
      <input type="text" ref={ref} className="inp" />
      <button className="btn" onClick={sub}>
        Submit
      </button>
    </div>
  );
};
export default Todo;

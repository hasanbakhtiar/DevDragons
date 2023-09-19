import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./features/todoSlice";

const App = () => {
  const [title, setTitle] = useState<string>("");
  const todoData: any = useSelector((p: any) => p.todos);
  const dispatch: any = useDispatch();
  const formSubmit = (e: React.FormEvent) => {
    
      e.preventDefault();
      dispatch(add(title));
      setTitle("");
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-light my-5">Todo App</h1>
      <div className="col-3">
        <form onSubmit={formSubmit} className="input-group mb-3">
          <input
            onChange={(e: any) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter todo"
            value={title}
            required
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </form>
        <ul className="list-group">
          {todoData.map((i: any) => (
            <li className="list-group-item d-flex align-items-center justify-content-between">
              {" "}
              {i.title}
              <button className="btn btn-danger" onClick={()=>{dispatch(remove(i.id))}}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

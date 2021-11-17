import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../store/actions/add";

export const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a task");
      return;
    }
    dispatch(addAction({ text, day }));
    setText("");
    setDay("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tasks:</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day:</label>
        <input
          type="day"
          placeholder="Add day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="save task"
        className="btn btn-block btn-success"
      />
    </form>
  );
};

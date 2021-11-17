import { FaTimes } from "react-icons/fa";

export const Task = ({ task, day }) => {
  return (
    <div className="task">
      <h5>
        <input type="checkbox" />
        {task}
        {day}
        <div className="icons">
          <FaTimes
            style={{
              color: "red"
            }}
          />
        </div>
      </h5>
    </div>
  );
};

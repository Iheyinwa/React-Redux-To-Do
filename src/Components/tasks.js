import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Task } from "./task";

export const Tasks = () => {
  const taskList = useSelector((state) => state.tasks);

  return (
    <div>
      {taskList.map((task) => (
        <Task key={task.id} text={task.text} day={task.day} />
      ))}
    </div>
  );
};

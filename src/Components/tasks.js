import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../store/actions/add";
import { Task } from "./task";

export const Tasks = () => {
  const taskList = useSelector((state) => state.tasks);
  console.log(taskList);
  const tasks = taskList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAction);
  }, [dispatch]);

  return (
    <div>
      {Object.values(taskList).forEach((id, text, day) => (
        <Task key={id} task={text} day={day} />
      ))}
    </div>
  );
};

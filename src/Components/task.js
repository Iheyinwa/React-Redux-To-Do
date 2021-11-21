import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction } from "../store/actions/delete";
import { DELETE_TASK } from "../store/constants";

export const Task = ({ text, day, id }) => {
  const task = useSelector((state) => state.tasks);
  const dispatch = useDispatch;
  const deleted = () => {
    dispatch(deleteAction());
  };
  return (
    <div className="task">
      <h5>
        {/* <input type="checkbox" /> */}
        {text}
        <FaTimes
          className="icons"
          style={{
            color: "red"
          }}
          onClick={deleted(id)}
        />
      </h5>
      <p>{day}</p>
    </div>
  );
};

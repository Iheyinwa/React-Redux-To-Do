import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "../Components/addTask";
import Button from "../Components/Button";
import Header from "../Components/Header";
import { Tasks } from "../Components/tasks";
import { addAction } from "../store/actions/add";
import { LOGOUT } from "../store/constants";

const Dash = (props) => {
  // const [plans, setTasks] = useState([]);
  const [showform, setShowForm] = useState(false);
  const auth = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // console.log(tasks);

  const handleLogout = () => {
    dispatch({ type: LOGOUT, payload: null });
  };
  // console.log(tasks)
  useEffect(() => {
    if (!auth.login) {
      props.history.push("/");
    }
  }, [auth]);

  const showAdd = () => {
    setShowForm(!showform);
  };

  return (
    <div className="container">
      <Header onClick={showAdd} />
      <Button onClick={handleLogout} id="log" text="Log Out" />
      {showform && <AddTask />}
      {tasks.length > 0 ? <Tasks /> : "No tasks to show"}
    </div>
  );
};
export default Dash;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AddTask } from "../Components/addTask";
import Button from "../Components/Button";
import Header from "../Components/Header";
import { Tasks } from "../Components/tasks";

const Dash = (props) => {
  const [showform, setShowForm] = useState(false);
  const auth = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);

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
      <Header props={props} />

      <Button
        onClick={showAdd}
        showform={showform}
        text={showform ? "close" : "add"}
        color={showform ? "red" : "green"}
      />
      {showform && <AddTask />}
      {tasks.length > 0 ? <Tasks /> : "No tasks to show"}
    </div>
  );
};
export default Dash;

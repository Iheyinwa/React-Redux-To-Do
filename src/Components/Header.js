import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../store/constants";
import Button from "./Button";

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: LOGOUT, payload: null });
  };

  return (
    <header className="header">
      <h2>{`${auth.userDetails?.username} planner`}</h2>
      <Button onClick={handleLogout} id="log" text="Log Out" color="red" />
    </header>
  );
}
export default Header;

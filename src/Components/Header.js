import { useSelector } from "react-redux";
import Button from "./Button";

function Header({ onClick, showform }) {
  const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  return (
    <header className="header">
      <h2>{`${auth.userDetails?.username} planner`}</h2>
      <Button text={showform ? "close" : "add"} onClick={onClick} />
    </header>
  );
}
export default Header;

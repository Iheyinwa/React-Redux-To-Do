import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/actions/auth";

function Login(props) {
  // console.log(props);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction({ username, password }));
  };

  useEffect(() => {
    if (auth.login) {
      props.history.push("/dash");
    }
  }, [auth]);
  return (
    <form className="text-center" action="/" method="post">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">UserName</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="inputName3"
            placeholder="enter your username"
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="passwordd"
            required
          />
        </div>
      </div>
      <button
        type="Submit"
        className="btn btn-success col-sm-12"
        onClick={onSubmit}
      >
        Log In
      </button>
    </form>
  );
}
export default Login;
// const mapStateToProp = (state) => {
//   // console.log(state.auth);
//   return {
//     isLogin: state.auth.login
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     authenticate: (payload) => {
//       dispatch(authAction(payload));
//     }
//   };
// };
// export default connect(mapStateToProp, { authAction })(Login);

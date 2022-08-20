import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { login } from "../../actions/userActions";
import "./LoginScreen.css";

function LoginScreen() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  const { userInfo, loading, error } = userData;

  const submitLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);


  return (
    <div className="login">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      <div className="container login_card">
        <form onSubmit={submitLogin} >
          <h5 className='text-center mb-4'><span className='login_title'>Login</span> to your account</h5>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" required className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control shadow-none" id="exampleInputPassword1" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          </div>


          <button type="submit" disabled={loading} className="btn btn-primary submit_login mt-2 d-flex flex-row-reverse"  > <span className='ml-1'>{loading && <Loading />}</span> Login</button>

        </form>
      </div>
    </div>
  );
}

export default LoginScreen;

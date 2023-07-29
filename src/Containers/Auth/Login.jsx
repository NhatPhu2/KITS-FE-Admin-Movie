import { styled } from "styled-components";
import logo from "../../assets/logo/M logo 1.png";
import { ReactComponent as IconEmail } from "../../assets/icons/iconEmail.svg";
import { ReactComponent as IconPassword } from "../../assets/icons/iconPassword.svg";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as IconGoogle } from "../../assets/icons/iconGoogle.svg";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";
const StyledLogin = styled.div`
  .err {
    display: block;
    margin: 4px 0 0 0;
    font-size: 13px;
    color: #e64646;
  }
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const initioValue = { username: "", password: "" };
const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;

    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter password.";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };
  const auth = useSelector((item) => item.auth);
  console.log("auth", auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [values, setValues] = useState(initioValue);
  const handleSummit = (e) => {
    dispatch.auth
      .login(input)
      .then((res) => {
        dispatch.auth.setAuth(true);
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or password is not correct!",
          footer: '<a href="">Why do I have this issue?</a>',
        })
      );
    console.log(input);

    // else if(error.response.data.data === "User not verify yet. Please verify your email"){
    //   toast.warning("User not verify yet. Please verify your email");
    //   <Alert severity="warning">This is a warning alert — check it out!</Alert>
    // }
  };

  return (
    <StyledLogin>
      <div className="headerLogo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Login into your account</h5>
      </div>
      <div className="form">
        <div className="formLogin">
          <form>
            <label htmlFor="email">Username</label>
            <div className="inputStyled">
              <input
                type="text"
                id="email"
                name="username"
                placeholder="marvelous"
                value={input.username}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              <div className="icon">
                <IconEmail />
              </div>
            </div>
            {error.username && <span className="err">{error.username}</span>}
            <label htmlFor="password">Password</label>
            <div className="inputStyled">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              <div className="icon">
                <IconPassword />
              </div>
            </div>
            {error.password && <span className="err">{error.password}</span>}
            <div className="underInput">
              <div className="remember">
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "#5D51A8",
                    "&.Mui-checked": {
                      color: "#FFFFFF",
                    },
                    backgroundColor: "#5D51A8",
                    width: "10px",
                    height: "10px",
                    boxShadow: "0px 0px 9px 1px #780EFF",
                  }}
                />
                <span className="rmb">Remember Me</span>
              </div>
              <NavLink to="/forgotpassword">Forgot password?</NavLink>
            </div>
            <div className="btn">
              <div className="login">
                <button type="button" onClick={handleSummit}>
                  LOGIN NOW
                </button>
              </div>
              <div className="or">
                <div className="line" />
                <p>OR</p>
                <div className="line" />
              </div>
              <div className="signup">
                <div className="btn_signup">
                  <NavLink to="/signup">Signup now</NavLink>
                </div>
                <div className="footerForm">
                  <p>since 2023</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;

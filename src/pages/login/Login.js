import { useState, useEffect, useContext } from "react";
import "./login.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FacebookIcon from "@material-ui/icons/Facebook";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { TextField } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Footer from "../../components/footer/Footer";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthenticationContext } from "../../auth/Authentication";
import { validEmailAndPhoneNumber } from "../../auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/login/actions";
import { withRouter } from "react-router";

const Login = () => {
  const history = useHistory();
  const [check, setCheck] = useState({ checkBox: true });
  const authContext = useContext(AuthenticationContext);
  const [form, setForm] = useState({
    email: {
      value: "",
      touched: false,
      valid: false,
    },

    password: {
      value: "",
      touched: false,
      valid: false,
    },

    onSubmitInvalid: false,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setForm((prevForm) => ({
        ...prevForm,
        email: {
          ...prevForm.email,
          value: value,
          touched: true,
          valid: value.length > 0 && validEmailAndPhoneNumber(value),
        },
      }));
    } else if (name === "password") {
      setForm((prevForm) => ({
        ...prevForm,
        password: {
          ...prevForm.password,
          value: value,
          touched: true,
          valid: value.length >= 4 && value.length <= 60,
        },
      }));
    }
  };

  const fieldBlurHandler = (e) => {
    if (e.target.name === "email") {
      if (form.email.value === "") {
        setForm((prevForm) => ({
          ...prevForm,
          email: { ...prevForm.email, touched: true },
        }));
      }
    }

    if (e.target.name === "password") {
      if (form.password.value === "") {
        setForm((prevForm) => ({
          ...prevForm,
          password: { ...prevForm.password, touched: true },
        }));
      }
    }
  };

  let [emailSpan, passwordSpan] = [null, null];

  if (
    (!form.email.valid && form.email.touched) ||
    (form.onSubmitInvalid && !form.email.valid)
  ) {
    emailSpan = <small>????????? ????????? ????????? ??????????????? ???????????????.</small>;
  }

  if (
    (!form.password.valid && form.password.touched) ||
    (form.onSubmitInvalid && !form.password.valid)
  ) {
    passwordSpan = <small>??????????????? 4~60??? ???????????? ?????????.</small>;
  }

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);

  // useEffect(() => {
  //     console.table(selector?.loginSuccess);
  // }, [selector]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    dispatch(loginUser(body)); // start
    console.table(selector?.loginSuccess); // ing
    // end
  };

  if (selector?.loginSuccess) {
    history.push("/profile");
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={onSubmitHandler}>
          <div className="login-container">
            <h1>?????????</h1>
            <TextField
              name="email"
              label="????????? ?????? ?????? ????????????"
              className="textField"
              variant="filled"
              type="text"
              style={{ backgroundColor: "#333" }}
              color="secondary"
              value={form.email.value}
              onChange={inputChangeHandler}
              onBlur={fieldBlurHandler}
              autoComplete="off"
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{
                style: { color: "#8c8c8c" },
              }}
            />

            {emailSpan}

            <TextField
              name="password"
              label="????????????"
              className="textField"
              variant="filled"
              type="password"
              style={{ backgroundColor: "#333" }}
              color="secondary"
              value={form.password.value}
              onChange={inputChangeHandler}
              onBlur={fieldBlurHandler}
              autoComplete="off"
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{
                style: { color: "#8c8c8c" },
              }}
            />

            {passwordSpan}

            <Button
              loginInvalid={
                form.password.valid && form.email.valid
              }
              onClick={onSubmitHandler}
            >
              ?????????
            </Button>
            <div className="remember">
              <small>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankIcon fontSize="small" />
                      }
                      checkedIcon={
                        <CheckBoxIcon fontSize="small" />
                      }
                      style={{
                        color: "white",
                      }}
                    />
                  }
                  label={
                    <span style={{ fontSize: "13.5px" }}>
                      ????????? ?????? ??????
                    </span>
                  }
                />
              </small>
              <small>????????? ???????????????????</small>
            </div>
            <div className="more">
              <span>
                <FacebookIcon color="primary" /> Facebook??????
                ?????????
              </span>
              <span>
                Netflix ????????? ????????????? <b>?????? ???????????????.</b>
              </span>
              <small>
                ??? ???????????? Google reCAPTCHA??? ????????? ??????
                ???????????? ????????? ????????? ???????????????.{" "}
                <span>????????? ????????????.</span>
              </small>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const Button = styled.button`
    margin-top: 30px;
    margin-bottom: 5px;
    height: 50px;
    width: 80%;
    border-radius: 5px;
    background-color: ${(props) =>
    props.loginInvalid ? "red" : "rgb(175, 60, 60)"};
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`;

export default withRouter(Login);

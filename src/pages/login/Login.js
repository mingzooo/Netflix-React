import { useState, useEffect, useContext } from 'react';
import "./login.scss";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FacebookIcon from '@material-ui/icons/Facebook';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { TextField } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Footer from "../../components/footer/Footer";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AuthenticationContext } from '../../auth/Authentication';
import { validEmailAndPhoneNumber } from '../../auth/auth';
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/login/actions";
import { withRouter } from 'react-router';

const Login = () => {
  const history = useHistory();
  const [check, setCheck] = useState({ checkBox: true });
  const authContext = useContext(AuthenticationContext);
  const [form, setForm] = useState({
    email: {
      value: '',
      touched: false,
      valid: false
    },

    password: {
      value: '',
      touched: false,
      valid: false
    },

    onSubmitInvalid: false
  })

  const inputChangeHandler = e => {
    const { name, value } = e.target;
    if (name === "email") {
      setForm(prevForm => ({
        ...prevForm,
        email: {
          ...prevForm.email,
          value: value, touched: true, valid: value.length > 0 && validEmailAndPhoneNumber(value)
        }
      }))

    } else if (name === "password") {
      setForm(prevForm => ({
        ...prevForm,
        password: {
          ...prevForm.password, value: value, touched: true,
          valid: value.length >= 4 && value.length <= 60
        }
      }))
    }
  };

  const fieldBlurHandler = e => {
    if (e.target.name === 'email') {
      if (form.email.value === '') {
        setForm(prevForm => ({
          ...prevForm,
          email: { ...prevForm.email, touched: true }
        }))
      }
    }

    if (e.target.name === 'password') {
      if (form.password.value === '') {
        setForm(prevForm => ({
          ...prevForm,
          password: { ...prevForm.password, touched: true }
        }))
      }
    }
  };

  let [emailSpan, passwordSpan] = [null, null];

  if ((!form.email.valid && form.email.touched) || (form.onSubmitInvalid && !form.email.valid)) {
    emailSpan = <small >정확한 이메일 주소나 전화번호를 입력하세요.</small>
  }

  if ((!form.password.valid && form.password.touched) || (form.onSubmitInvalid && !form.password.valid)) {
    passwordSpan = <small>비밀번호는 4~60자 사이여야 합니다.</small>
  }


  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    dispatch(loginUser(body))
      .then((res) => {
        console.log(res);
        if (res.payload.loginSuccess) {
          history.push("/profile");
        } else {
          alert(res.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <h1>로그인</h1>
            <TextField
              name="email"
              label="이메일 주소 또는 전화번호"
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
                style: { color: "#8c8c8c" }
              }}
            />

            {emailSpan}

            <TextField
              name="password"
              label="비밀번호"
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
                style: { color: "#8c8c8c" }
              }}
            />

            {passwordSpan}

            <Button loginInvalid={form.password.valid && form.email.valid} onClick={onSubmitHandler}>로그인</Button>
            <div className="remember">
              <small>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      style={{
                        color: "white",
                      }}
                    />
                  }
                  label={<span style={{ fontSize: '13.5px' }}>로그인 정보 저장</span>}
                />
              </small>
              <small>도움이 필요하신가요?</small>
            </div>
            <div className="more">
              <span><FacebookIcon color="primary" />  Facebook으로 로그인</span>
              <span>
                Netflix 회원이 아닌가요? <b>지금 가입하세요.</b>
              </span>
              <small>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <span>자세히 알아보기.</span></small>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}


const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 5px;
  height: 50px;
  width: 80%;
  border-radius: 5px;
  background-color: ${props => props.loginInvalid ? 'red' : 'rgb(175, 60, 60)'};
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export default withRouter(Login);
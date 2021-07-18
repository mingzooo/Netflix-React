import { useState, useEffect } from 'react';
import "./login.scss";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FacebookIcon from '@material-ui/icons/Facebook';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Footer from "../../components/footer/Footer";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  width: 80%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: rgb(49, 49, 49);
  color: white;
  border: none;
  margin-bottom: 10px;

  &::placeholder {
    color: rgb(100, 100, 100);
  }

`;

const Login = () => {
  const history = useHistory();
  const [check, setCheck] = useState({ checkBox: true });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwvalid, setPwvalid] = useState(false);

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  const goToProfile = () => {
    history.push("/profile")
  };

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    ((password.length < 4 && password.length >= 1) ? setPwvalid(false) : setPwvalid(true))
    console.log(pwvalid);
  })

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
        <form>
          <div className="login-container">
            <h1>로그인</h1>
            <Input type="email" value={email} placeholder="이메일 주소 또는 전화번호" />
            <Input color={pwvalid ? '' : 'red'} type="password" value={password} placeholder="비밀번호" onChange={onChange} />
            <button button onClick={goToProfile}>로그인</button>
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

export default Login;
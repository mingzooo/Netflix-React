import { useRef, useState } from "react";
import "./register.scss";
import { useHistory } from 'react-router-dom';
import FaqComponent from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import { texualMaterial } from './LandingSectionTexts';
import IntroComponent from '../../components/intro/Intro';
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/login/actions";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const darkComponents = texualMaterial.darkComponent.map(darkcomp => (
    <div className="tv-section" key={darkcomp.id}>
      <div className="responsive-tv-inner">
        <IntroComponent
          topText={darkcomp.topText}
          bottomText={darkcomp.bottomText}
          image={darkcomp.image}
        />
      </div>
    </div>
  ))

  const [faqBoxOpen, setFaqBoxOpen] = useState({});

  const faqOpenHandler = boxNumber => {
    setFaqBoxOpen(prevBoxState => ({
      [boxNumber]: !prevBoxState[boxNumber]
    }));
  };

  const faqComponents = texualMaterial.faqComponent.map(faqcomp => (
    <FaqComponent
      key={faqcomp.id}
      text={faqcomp.text}
      boxOpen={faqBoxOpen[`box${faqcomp.id}`]}
      faqOpenHandler={() => faqOpenHandler(`box${faqcomp.id}`)}
      boxText={faqcomp.boxText}
    />
  ))

  const handleStart = (e) => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = (e) => {
    setPassword(passwordRef.current.value);
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: email,
      password: password,
    };
    dispatch(registerUser(body)).then((res) => {
      alert("가입이 정상적으로 완료되었습니다");
      console.log(body);
      history.push("/login");
    });
  };

  const goToLogin = () => {
    history.push("/login")
  };

  return (
    <div className="main">
      <div className="register">
        <div className="top">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div>
            <select class="lang-select">
              <option>한국어</option>
              <option>English</option>
            </select>
            <button onClick={goToLogin} className="loginButton">로그인</button>
          </div>
        </div>
        <div className="container">
          <h1>영화, TV 프로그램을<br /> 무제한으로.</h1>
          <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
          <p>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="이메일 주소" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                시작하기 >
              </button>
            </div>
          ) : (
            <form className="input" onSubmit={onSubmitHandler}>
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
      <div>
        {darkComponents}
      </div>
      <div className="for-faq">
        <h1>자주 묻는 질문</h1>
        {faqComponents}
        <span>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</span>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="이메일 주소" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
                시작하기 >
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Register);
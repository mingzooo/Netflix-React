import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import { useHistory } from 'react-router-dom';
import FaqComponent from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import { texualMaterial } from './LandingSectionTexts'

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

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

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
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
            <form className="input">
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
      <div class="container1">
        <div class="text">
          <h1>TV로 즐기세요.</h1>
          <p>
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이플레이어 등 다양한 디바이스에서 시청하세요.
          </p>
        </div>
        <div class="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </div>
      </div>

      <div class="container1">

        <div class="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </div>
        <div class="text">
          <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
          <p>
            간편하게 저장하고 빈틈없이 즐겨보세요.
          </p>
        </div>

      </div>

      <div class="container1">
        <div class="text">
          <h1>다양한 디바이스에서 시청하세요.</h1>
          <p>
            각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
          </p>
        </div>
        <div class="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
        </div>
      </div>

      <div class="container1">
        <div class="image">
          <img
            src="https://occ-0-4831-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf" />
        </div>
        <div class="text">
          <h1>어린이 전용 프로필을 만들어 보세요.</h1>
          <p>
            자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
          </p>
        </div>
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

export default Register;
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import "./navbar.scss";

const Navbar = () => {

  const profile2 =
    "https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71";
  const profile3 =
    "https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV5QMl3XdlLGk7lVqErjXtqQUV9RDRhGn4YZzKk2XPtqMJbmE6UMzGRPTeDeUpETn6V3XocrWHYZvp4a6CwYFr7Oi3cZ.png?r=acf";

  const history = useHistory();
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const goToTv = () => {
    history.push('/browse/tv');
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>홈</span>
          <span onClick={goToTv}>TV프로그램</span>
          <span onClick={goToTv}>영화</span>
          <span onClick={goToTv}>NEW!요즘 대세 콘텐츠</span>
          <span onClick={goToTv}>내가 찜한 콘텐츠</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>키즈</span>
          <Notifications className="icon" />
          <img
            src="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <div className="profile1"><img src={profile2} /><span>deemo</span></div>
              <div className="profile1"><img src={profile3} /><span>키즈</span></div>
              <div className="last">프로필 관리</div>
              <span>계정</span>
              <span>고객센터</span>
              <span>넷플릭스에서 로그아웃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

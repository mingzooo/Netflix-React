import { useState } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import SoundButton from '../soundbutton/SoundButton';
import VideoModal from '../modal/VideoModal';
import { useHistory } from "react-router";

export default function Featured({ type }) {

  const history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  const [topTrailerSoundOn, setTopTrailerSoundOn] = useState(true);
  const topTrailerSoundButtonClickHandler = () => setTopTrailerSoundOn(prevState => !prevState);

  const goToWatch = () => {
    history.push("/watch")
  };

  return (
    <div className="featured">
      <img
        src="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVY7DBrLw25efe90VbGVE-TXzfj4x5yYJWjGIt1heZ8CEHCkcrw_bc_JsPXCvqb_hrML13sZX2mMg6q890ZwcSanCJ9l.webp?r=f61"
        alt=""
      />
      <div className="infoTemplate">
        <div className="info">
          <img
            src="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABa66W33E3jX_yDId2aQ5FjuyFv5cSQ_jqZ1MDkfrtZHBUMSTYG4XDIdyRwGaICDDTP-amLWxFoVE1Bl4lXyS8sFxz7VlWZciT28f.webp?r=fe7"
            alt=""
          />
          <span className="desc">
            술에 절어 사는 천재 과학자 릭은 투정이 심한 10대 손자 모티를 데리고 외계와 대체 현실로 아슬아슬한 모험을 떠난다.
          </span>
        </div>
        <div className="three-buttons">
          <div className="buttons">
            <button className="play" onClick={goToWatch}>
              <PlayArrow />
              <span>재생</span>
            </button>
            <button className="more" onClick={openModal}>
              <InfoOutlined />
              <span>상세정보</span>
            </button>
            <VideoModal open={modalOpen} close={closeModal} />
          </div>
          <div>
            <SoundButton topTrailerSoundButtonClickHandler={topTrailerSoundButtonClickHandler}
              topTrailerSoundOn={topTrailerSoundOn} />
          </div>
        </div>
      </div>
    </div>
  );
}

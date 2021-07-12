import React from 'react';
import "./videoModal.css";
import { useState } from "react";
import { useHistory } from 'react-router';
import SoundButton from '../soundbutton/SoundButton';
import CancelIcon from '@material-ui/icons/Cancel';
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";

const VideoModal = (props) => {
    const history = useHistory();
    const { open, close } = props;

    const [topTrailerSoundOn, setTopTrailerSoundOn] = useState(true);
    const topTrailerSoundButtonClickHandler = () => setTopTrailerSoundOn(prevState => !prevState);

    const goToWatch = () => {
        history.push("/watch")
    };

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <div className="template">
                    <div className="image" />
                    <div className="closeIcon" onClick={close}>
                        <CancelIcon className="cancleIcon" />
                    </div>
                    <div className="info">
                        <img
                            src="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABa66W33E3jX_yDId2aQ5FjuyFv5cSQ_jqZ1MDkfrtZHBUMSTYG4XDIdyRwGaICDDTP-amLWxFoVE1Bl4lXyS8sFxz7VlWZciT28f.webp?r=fe7"
                            alt=""
                        />
                    </div>
                    <div className="buttons">
                        <div className="left-buttons">
                            <button className="play" onClick={goToWatch}>
                                <PlayArrow />
                                <span>재생</span>
                            </button>
                            <Add className="icon1" />
                            <ThumbUpAltOutlined className="icon1" />
                            <ThumbDownOutlined className="icon1" />
                        </div>
                        <div className="right-buttons">
                            <SoundButton topTrailerSoundButtonClickHandler={topTrailerSoundButtonClickHandler}
                                topTrailerSoundOn={topTrailerSoundOn} />
                        </div>
                    </div>
                    <div className="main-container">
                        <div className="container">
                            <div className="itemInfoTop">
                                <span className="green">88% 일치</span>
                                <span> 2019 </span>
                                <span>시즌 4개</span>
                                <span className="limit">HD</span>
                            </div>
                            <h4>
                                시즌 5 : 7월 18일 공개
                            </h4>
                            <span>
                                술에 절어 사는 천재 과학자 릭은 투정이 심한 10대 손자 모티를 데리고 외계와 대체 현실로 아슬아슬한 모험을 떠난다.
                            </span>
                        </div>
                        <div className="container2">
                            <span><small>출연: </small>저스틴 로일랜드, 크리스 파넬, 스펜서 그래머</span>
                            <span><small>장르: </small>TV 프로그램/SF, 시트콤, TV 프로그램/코미디</span>
                            <span><small>프로그램 특징: </small>황당한 이야기, 엉뚱 기발</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default VideoModal;
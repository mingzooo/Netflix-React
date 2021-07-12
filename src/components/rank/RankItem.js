import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './rankItem.scss';

const RankItem = ({ index, trailer, num, poster }) => {
    const history = useHistory();
    const [isHovered, setIsHovered] = useState(false);

    const goToWatch = () => {
        history.push("/watch")
    };

    return (
        <div
            className="rankItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="image11" src={num} />
            <img className="image1" src={poster} />

            {isHovered && (
                <div>
                    <img
                        src="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU0tefpCrB9uLAmyF8d2tnr3yG8d0E_hMCl07ErqviP7R5jPII1KBD_wL77AhkiHcMGv1Idb9wHsBnCAwWynRmnfDy82-abfyH-WXITLM-yFc6WCabWp3bsf1NBp0GuOZIUuULKd6aTEHSl4rUVPRpz7evuLYBT7PcWQhgF2dSKvbWaQpiudI1cn3EtJ.webp?r=84b"
                        alt=""
                    />
                    <video src={trailer} autoPlay={true} loop type="video/mp4" />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow onClick={goToWatch} className="icon1" />
                            <Add className="icon1" />
                            <ThumbUpAltOutlined className="icon1" />
                            <ThumbDownOutlined className="icon1" />
                            <ExpandMoreIcon className="icon-right" />
                        </div>
                        <div className="itemInfoTop">
                            <span className="green">98% 일치</span>
                            <span className="limit">15+</span>
                            <span>시즌2개</span>
                            <span className="limit">HD</span>
                        </div>
                        <div className="genre">가슴뭉클 드라마장르 코미디</div>
                    </div>
                </div>
            )}

        </div >
    );
}

export default RankItem;
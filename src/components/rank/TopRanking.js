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

const TopRankingComponent = props => {
    const { id, num, poster, hovered } = props

    const history = useHistory();
    const [isHovered, setIsHovered] = useState(false);

    const goToWatch = () => {
        history.push("/watch")
    };

    return (
        <div
            className="rankItem"
            style={{ left: isHovered && (id - 1) * 225 - 50 + (id - 1) * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="image11" src={num} />
            <img className="image1" src={poster} />

            {isHovered && (
                <div>
                    <img
                        src={hovered}
                        alt=""
                    />
                    <video src={hovered} autoPlay={true} loop type="video/mp4" />
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
};

export default TopRankingComponent;
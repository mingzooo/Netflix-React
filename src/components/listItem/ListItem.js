import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ListItem = ({ index }) => {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);

  const goToWatch = () => {
    history.push("/watch")
  };

  const trailer = "../video/nf.gif";
  const trailer_logo = "https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXskjX1CmmA2wYo11Dk2bdvNIXT2F263vWUUKZZ0Ls9v11rfyeY-2rql6jgLGrYGGK2GRFftmUuzj23BXhQy8Vv243f0ZnwoFTo.webp?r=803";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU0tefpCrB9uLAmyF8d2tnr3yG8d0E_hMCl07ErqviP7R5jPII1KBD_wL77AhkiHcMGv1Idb9wHsBnCAwWynRmnfDy82-abfyH-WXITLM-yFc6WCabWp3bsf1NBp0GuOZIUuULKd6aTEHSl4rUVPRpz7evuLYBT7PcWQhgF2dSKvbWaQpiudI1cn3EtJ.webp?r=84b"
        alt=""
      />
      {isHovered && (
        <>
          <video poster={trailer_logo} src={trailer} autoPlay={true} loop type="video/mp4" />
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
        </>
      )}
    </div>
  );
}

export default ListItem;

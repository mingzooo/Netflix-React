import { ArrowBackOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
  const history = useHistory();

  const goToBrowse = () => {
    history.push("/browse")
  };

  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined onClick={goToBrowse} />
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="../../video/nf.gif"
      />
    </div>
  );
}

export default Watch;
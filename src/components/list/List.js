import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({ category }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 5);
      listRef.current.style.transform = `translateX(${1150 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 5);
      listRef.current.style.transform = `translateX(${-1150 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{category}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
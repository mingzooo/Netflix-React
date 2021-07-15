import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useRef, useState } from "react";
import "./rank.scss";
import { movies } from '../../movies/topRating';
import TopRankingComponent from "./TopRanking";

const Rank = ({ category }) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 4);
            listRef.current.style.transform = `translateX(${920 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 4);
            listRef.current.style.transform = `translateX(${-920 + distance}px)`;
        }
    };

    const RankingComponents = movies.topRanking.map(toprank => (
        <div key={toprank.id}>
            <TopRankingComponent
                num={toprank.num}
                poster={toprank.poster}
                hovered={toprank.hovered}
            />
        </div>
    ))


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
                    {RankingComponents}
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}

export default Rank;
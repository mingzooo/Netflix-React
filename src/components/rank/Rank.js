import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useRef, useState } from "react";
import RankItem from './RankItem';
import "./rank.scss";

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
                    <RankItem index={0} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522738.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdYE1CJjXRU-IYoC_1i8apgu3Nb7zwFOkYbr6nDEXtJmAISYj646d8CFQ5DngSAzCYrAOlj9_MuE-Qc4F5ysU0ZIBvBApUvxlTFOlZM4urKkLTZ7dR8L9otYMU6jpbnlJ5qQ4jrYjlr5pw.webp?r=e1d" />
                    <RankItem index={1} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522763.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSzNwSQKX6HonEUA9fN4mddLItQkQSXQIpwZlC_WzN3KO0ru7GDgzLoeSuC31QXorRHCQsr4oR4rSjtQTOKZrs-hFDwb3Rflkc9EZnDK7hKv5YBK86P85oKk5t6lhQ.jpg?r=5c3" />
                    <RankItem index={2} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522782.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUG44KIi9FvMSEdDNwtcngBt9TCPiAjzX_qoT3DKPQGtD56Ejln5CQQCgkeKbQt3C7gkiXBPyMBdBBOzHn5TmnFiNf_Xv8gDpDhPbdxu3DwIH_Tu7JrTCDmVKp1xlhdZOzH0JpPWyWXBgg.webp?r=c24" />
                    <RankItem index={3} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522808.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABX3dpdGeSfE2TYIJ_N2gBzvRya4VlRp32sUQsRxdW_yeZmrwrIKJOpp-lhWFj6Y3dDZdSVcDAcDigWJ-_M83TpFu0Y8-fV6UyWZY3G6IIB4yi1KgmaV7y4oYsBkbFA.jpg?r=4a9" />
                    <RankItem index={4} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522825.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXFGyMSL5_jjMyxMg5tbhTh5cPaYU_dw75m6rDAPwY6MJXqdkVr2Fy-xESO0PKW99OcggzsNmMg9tk3iaA8f6IiZfy1jXexpyJd1dha3nh20XEdRrbI5hoFjMzG5BmE8Yg06Qnma1g8zCA.webp?r=825" />
                    <RankItem index={5} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522854.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABf7UkTjJriVg_Y0YFYkWHb5IAv8Mxqw6k4J6ERCZIIdEmNWMh1vw65DQ9XAPW7aBTywnLnJvQtfgubjWN6qLsNS8XJgNZGgWEyeVBuIk9B-qgJaWHYuYnkIZrh_uxQ.jpg?r=31b" />
                    <RankItem index={6} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522883.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABT547Js0Ylm4zsEPgyEqLqOFNV8scOq5amN6Hu4HPuogtbEFHDKQkyhrRR6gOUJlHdfSBJUv1P8ZU4cJK_dUH1y1fkCV6dZgcFhYrr4a_onIZo0e4dsa5toSVrJVd2gQZXkpyP_oSlN4yg.webp?r=205" />
                    <RankItem index={7} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522908.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABafoGLenYifMMiMObXBuGt5U5JrntfBItdSlzIZPC5lJsxFIV2EAaL2MFIvkGDI6m8_XNu4cKDvwUpv7Vw-VCWncCHEx9BjXy5UqjZJXKBHNkxWXQmxFnUomdV8F5Ad7xjpvMH2teoOpmw.webp?r=1a5" />
                    <RankItem index={8} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522925.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTJQXuZEdu93e81aSzUCHT9JSCLJpm5zoRZVWOzLVnfy9JMGcmYeJIMG__Y2luVCskN7bRNimnx_a1sa37bEiJKUP-lriE2sqbuAdARdyaiAU_suRSw5o9dS5Rs99Q.jpg?r=355" />
                    <RankItem index={9} trailer="../video/nf.gif" num="https://image.flaticon.com/icons/png/512/3522/3522725.png" poster="https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ1NOvwCs-LJb_S6kTWoKOcW2Poo4nOiXq4BfjKVC_dkrpuLIkSiwFURzM5ytZJyMscGkwjRA_MOMxsGnQ_22-DnAuH8kUiDALv_DTZ3M2RzbQ5EG17zUbKO0KYuC46oeZgP85zxkg4PjA.webp?r=476" />
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
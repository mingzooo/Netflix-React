import React from "react";
import "./faq.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from 'react-transition-group'

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FaqComponent = props => {
    const { faqOpenHandler, text, boxOpen, boxText } = props
    return (
        <>
            <div
                className="faqComponent"
                onClick={faqOpenHandler}
            >
                <div>{text}</div>
                <FontAwesomeIcon icon={boxOpen ? faMinus : faPlus} />
            </div>

            <CSSTransition in={boxOpen} classNames="faq-animation" timeout={500} unmountOnExit>
                <div className="faqComponent" style={{ marginTop: "1.5px" }}>
                    {boxText}
                </div>
            </CSSTransition>
        </>
    );
};

export default FaqComponent;
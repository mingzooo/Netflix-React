import React from "react";
import "./faq.css";


import { AddIcon, RemoveIcon } from '@material-ui/icons/Add';
import { CSSTransition } from 'react-transition-group';

const faqComponents = (props) => {
    const { faqOpenHandler, text, boxOpen, boxText } = props
    return (
        <>
            <div
                className="faqComponent"
                onClick={faqOpenHandler}
            >
                <div>{text}</div>
                <div icon={boxOpen ? RemoveIcon : AddIcon} />
            </div>

            <CSSTransition in={boxOpen} classNames="faq-animation" timeout={500} unmountOnExit>
                <div className="faqComponent" style={{ marginTop: "1.5px" }}>
                    {boxText}
                </div>
            </CSSTransition>
        </>
    );
};

export default faqComponents;
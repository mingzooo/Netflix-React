import React from 'react'
import './soundButton.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const SoundButton = props => {
    const { topTrailerSoundOn, topTrailerSoundButtonClickHandler } = props
    return (
        <button className="RoundButton" onClick={topTrailerSoundButtonClickHandler}>
            <FontAwesomeIcon icon={topTrailerSoundOn ? faVolumeUp : faVolumeMute} />
        </button>
    )
}

export default SoundButton;
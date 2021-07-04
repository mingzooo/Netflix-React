import React from 'react'
import './profileCard.css'

const ProfileCard = props => {
    return (
        <div className={props.dropdown ? "ProfileCardDropdown" : "ProfileCard"} onClick={props.onClick}>
            <img src={props.profileImage} alt="profile" />
            <span>{props.username}</span>
        </div>
    )
}

export default ProfileCard;
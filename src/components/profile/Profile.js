import React from 'react';
import './profile.css';
import ProfileCard from './ProfileCard';


const ProfileModal = () => {

    const NetflixLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png";
    const profile1 =
        "https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41";
    const profile2 =
        "https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71";
    const profile3 =
        "https://occ-0-4831-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV5QMl3XdlLGk7lVqErjXtqQUV9RDRhGn4YZzKk2XPtqMJbmE6UMzGRPTeDeUpETn6V3XocrWHYZvp4a6CwYFr7Oi3cZ.png?r=acf";

    return (
        <div className="Profile">
            <img src={NetflixLogo} alt="Logo" />
            <div className="ProfileDiv">
                <h1>넷플릭스를 시청할 프로필을 선택하세요.</h1>

                <div className="horizontalComp">
                    <ProfileCard profileImage={profile1} username="박민주" />
                    <ProfileCard profileImage={profile2} username="Deemo" />
                    <ProfileCard profileImage={profile3} username="키즈" />
                    <ProfileCard profileImage={profile1} username="프로필추가" />
                </div>

                <button className="ProfileButton">
                    프로필 관리
                </button>
            </div>
        </div>

    )
}

export default ProfileModal;
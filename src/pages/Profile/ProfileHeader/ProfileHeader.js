import React from 'react';
import PropTypes from 'prop-types';
import style from '../profile.module.css';
import UserInfo from './UserInfo';
import UserAvatar from './UserAvatar';

const ProfileHeader = function ({ profile }) {
    return (
        <div className={style.profileUserInfo} data-testid="profileUserInfo">
            <UserAvatar avatar={profile.author.avatarMedium} />
            <UserInfo profile={profile} />
        </div>
    );
};

ProfileHeader.propTypes = {
    profile: PropTypes.object,
};

ProfileHeader.defaultProps = {
    profile: {},
};

export default ProfileHeader;

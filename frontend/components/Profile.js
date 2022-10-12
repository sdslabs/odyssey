import PropTypes from 'prop-types'
import Image from 'next/image'
import testimage from './../public/images/test_user.png'

const Profile = () => {
    return (
        <div className="profile-card">
            <div className='profile-container'>
            <div className='image'><Image class="userimage" src={testimage} /></div>
            <hr className="line" />
            </div>
        </div>
    );
};

export default Profile;

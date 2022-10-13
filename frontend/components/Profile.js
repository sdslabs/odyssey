import PropTypes from 'prop-types'

const Profile = ({uname,aname,role,eno,contact,email,github}) => {
    return (
        <div className="profile-card">
            <div className='profile-container'>
                <p className='username'>{uname}</p>
                <p className='actualname'>{aname}</p>
                <p className='role'>{role}</p>
            <div className='image'><img className="userimage" src='/images/test_user.png' /></div>
            <hr className="line" />
            <img className="edit" src="images/edit.svg" />
            <p className='field' style={{top: 16.69+"rem", left: 3.438+"rem"}}>ENROLLMENT NO</p>
            <p className='field' style={{top: 20.5+"rem", left: 3.438+"rem"}}>CONTACT NO</p>
            <p className='field' style={{top: 24.31+"rem", left: 3.438+"rem"}}>EMAIL ID</p>
            <p className='field' style={{top: 28.125+"rem", left: 3.438+"rem"}}>GITHUB HANDLE</p>
            <p className='value' style={{top: 16.69+"rem", left: 26.5+"rem"}}>{eno}</p>
            <p className='value' style={{top: 20.5+"rem", left: 26.5+"rem"}}>{contact}</p>
            <p className='value' style={{top: 24.31+"rem", left: 26.5+"rem"}}>{email}</p>
            <p className='value' style={{top: 28.125+"rem", left: 26.5+"rem"}}>{github}</p>
            </div>
        </div>
    );
};

Profile.defaultProps={
    uname: "USERNAME",
    aname: "ACTUAL NAME",
    role: "DEVELOPER",
    eno: "Lorem Ipsum",
    contact: "Lorem Ipsum",
    email: "Lorem Ipsum",
    github: "Lorem Ipsum",
}

Profile.propTypes={
    uname: PropTypes.string,
    aname: PropTypes.string,
    eno: PropTypes.string,
    contact: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
}

export default Profile;
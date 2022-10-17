import PropTypes from 'prop-types';
import {useState} from 'react';

<<<<<<< HEAD
const Profile = ({uname,aname,role,eno,contact,email,github})=>{

    const [editProfile,setEdit] = useState(true);

    return(
        <div className="signup">
            <form>
                <div className="avatar">
                    <div className="imageCropper">
                        <img src="/images/pfp.jpg" alt="Avatar"/>
                    </div>
                    <div className="labels">
                        <label className="userHandle">{uname}</label>
                        <label className="actualName">{aname}</label>
                        {editProfile === true ? <label className="role">{role}</label>: true}
                    </div>
                    {editProfile === true ? 
                        <div>
                            <input type="image" className="edit" src="images/edit.svg" onClick={()=>{
                                setEdit(false);
                            }}/>
                        </div>
                        :
                        <select className="dropDown">
                            <option>DESIGNER</option>
                            <option>DEVELOPER</option>
                        </select>
                    }
                </div>
                {editProfile === true ? <hr />:true}
                {editProfile === true ? 
                    <div>
                        <div className="form-floating">
                            <label>ENROLLMENT NO</label>
                            <label className='details'>{eno}</label> 
                        </div>
                        <div className="form-floating">
                            <label>CONTACT NO</label>
                            <label className='details'>{contact}</label> 
                        </div>
                        <div className="form-floating">
                            <label>EMAIL ID</label>
                            <label className='details'>{email}</label>
                        </div>
                        <div className="form-floating">
                            <label>GITHUB HANDLE</label>
                            <label className='details'>{github}</label>
                        </div>
                    </div> 
                    :
                    <div>
                        <div className="form-floating">
                            <label>ENROLLMENT NO</label>
                            <input type="text" placeholder="ENTER ENROLLMENT NO." className="input"/>
                        </div>
                        <div className="form-floating">
                            <label>CONTACT NO</label>
                            <input type="text" placeholder="ENTER CONTACT NO." pattern="[0-9]{10}" className="input"/>
                        </div>
                        <div className="form-floating">
                            <label>EMAIL ID</label>
                            <input type="email" placeholder="ENTER EMAIL ID" className="input"/>
                        </div>
                        <div className="form-floating">
                            <label>GITHUB HANDLE</label>
                            <input type="text" placeholder="ENTER GITHUB HANDLE" className="input"/>
                        </div>
                        <button type="submit" className="logout_button">Sign Up</button>
                    </div>
                }
            </form>
=======
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
>>>>>>> 9b03e703dfdc8a299088770f23d7bde6abc2e4f7
        </div>
    )
}

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
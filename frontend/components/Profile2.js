import PropTypes from 'prop-types';
import {useState} from 'react';

const Profile = ({uname,aname,role,eno,contact,email,pfp})=>{

    const [editProfile,setEdit] = useState(true);

    return(
        <div className="signup">
            <form>
                <div className="avatar">
                    <div className="imageCropper">
                        <img src={pfp} alt="Avatar"/>
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
                            <label>ACTUAL NAME</label>
                            <label className='details'>{aname}</label>
                        </div>
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
                    </div> 
                    :
                    <div>
                        <div className="form-floating">
                            <label>ACTUAL NAME</label>
                            <input type="text" placeholder="ENTER YOUR NAME" className="input"/>
                        </div>
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
                        <button type="submit" className="logout_button">Sign Up</button>
                    </div>
                }
            </form>
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
}

Profile.propTypes={
    uname: PropTypes.string,
    aname: PropTypes.string,
    eno: PropTypes.string,
    contact: PropTypes.string,
    email: PropTypes.string,
}

export default Profile;
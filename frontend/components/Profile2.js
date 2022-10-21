import axios from "axios";
import { useSession } from "next-auth/react";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

const Profile = ({ uname, aname, role, eno, contact, email, pfp }) => {
  const { data: session } = useSession();
  const [editProfile, setEdit] = useState(true);
  const [formName, setName] = useState("");
  const [formEmail, setEmail] = useState("");
  const [formEno, setEno] = useState("");
  const [formContact, setContact] = useState("");
  const [formField, setField] = useState("Developer");

  async function setData() {
    let data = {
      access_token: session.accessToken,
      id_token: session.user.id,
      name: formName ? formName : aname,
      email: formEmail ? formEmail : email,
      enrollmentNo: formEno ? formEno : eno,
      contactNo: formContact ? formContact : contact,
      field: formField ? formField : field,
    };

    axios.post("http://localhost:8000/api/set-user/", data).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="signup">
      <form className="user-form">
        <div className="avatar">
          <div
            className="imageCropper"
            style={{
              backgroundImage: `url(${pfp})`,
            }}
          ></div>
          <div className="labels">
            <label className="userHandle">{uname}</label>
            <label className="actualName">{aname}</label>
            {editProfile === true ? (
              <label className="role">{role}</label>
            ) : (
              true
            )}
          </div>
          {editProfile === true ? (
            <div>
              <input
                type="image"
                className="edit"
                src="images/edit.svg"
                onClick={() => {
                  setEdit(false);
                }}
              />
            </div>
          ) : (
            <select
              className="dropDown"
              onChange={(e) => {
                setField(e.target.value);
              }}
            >
              <option value="Designer">DESIGNER</option>
              <option value="Developer" selected>
                DEVELOPER
              </option>
            </select>
          )}
        </div>
        {editProfile && <hr />}
        {editProfile === true ? (
          <div className="user-details">
            <div className="form-floating">
              <label>ACTUAL NAME</label>
              <label className="details">{aname}</label>
            </div>
            <div className="form-floating">
              <label>ENROLLMENT NO</label>
              <label className="details">{eno}</label>
            </div>
            <div className="form-floating">
              <label>CONTACT NO</label>
              <label className="details">{contact}</label>
            </div>
            <div className="form-floating">
              <label>EMAIL ID</label>
              <label className="details">{email}</label>
            </div>
          </div>
        ) : (
          <div className="user-details">
            <div className="form-floating">
              <label>ACTUAL NAME</label>
              <input
                type="text"
                placeholder="ENTER YOUR NAME"
                className="input"
                onChange={(e) => setName(e.target.value)}
                value={formName}
              />
            </div>
            <div className="form-floating">
              <label>ENROLLMENT NO</label>
              <input
                type="text"
                placeholder="ENTER ENROLLMENT NO."
                className="input"
                onChange={(e) => setEno(e.target.value)}
                value={formEno}
              />
            </div>
            <div className="form-floating">
              <label>CONTACT NO</label>
              <input
                type="text"
                placeholder="ENTER CONTACT NO."
                pattern="[0-9]{10}"
                className="input"
                onChange={(e) => setContact(e.target.value)}
                value={formContact}
              />
            </div>
            <div className="form-floating">
              <label>EMAIL ID</label>
              <input
                type="email"
                placeholder="ENTER EMAIL ID"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                value={formEmail}
              />
            </div>
            <div
              style={{
                height: "50px",
              }}
            >
              <Button onClick={() => setData()} text={"Sign Up"} />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

Profile.defaultProps = {
  uname: "USERNAME",
  aname: "ACTUAL NAME",
  role: "DEVELOPER",
  eno: "Lorem Ipsum",
  contact: "Lorem Ipsum",
  email: "Lorem Ipsum",
};

Profile.propTypes = {
  uname: PropTypes.string,
  aname: PropTypes.string,
  eno: PropTypes.string,
  contact: PropTypes.string,
  email: PropTypes.string,
};

export default Profile;

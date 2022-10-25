import Profile from "../../components/Profile2";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import UserProgress from "../../components/UserProgress";
import ProfileIssues from "../../components/ProfileIssues";

const axios = require("axios").default;

export default function Home() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const response = await axios.post("http://localhost:8000/api/get-user/", {
      access_token: session.accessToken,
      id_token: session.user.id,
    });
    return response;
  };

  useEffect(() => {
    if (session)
      fetchUserData().then((response) => {
        let userData = {};
        console.log(response.data);
        userData.uname = response.data.username;
        userData.role = response.data.field;
        userData.eno = response.data.enrollmentNo;
        userData.contact = response.data.contactNo;
        userData.aname = response.data.name;
        userData.email = response.data.email;
        userData.pfp = session.user.image;
        userData.issue = response.data.assignedIssue;
        setUser(userData);
      });
  }, [session]);

  return (
    <>
      {user ? (
        <div className="profile">
          <div className="profile-page-content">
            <Profile
              uname={user.uname}
              aname={user.aname}
              role={user.role}
              eno={user.eno}
              contact={user.contact}
              email={user.email}
              pfp={user.pfp}
            />
            <UserProgress progress={0} rank={"NA"} />
          </div>
          <ProfileIssues issue={user.issue} />
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

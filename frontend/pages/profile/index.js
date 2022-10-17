import Profile from "../../components/Profile2";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
const axios = require("axios").default;

export default function Home() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const response = await axios.post('http://localhost:8000/api/get-user/', { access_token: session.accessToken, id_token: session.user.id });
    return response
  }

  useEffect(() => {
    if (session) fetchUserData().then((response)=>{
      let userData ={};
      userData.uname = response.data.username;
      userData.role = response.data.field;
      userData.eno = response.data.enrollmentNo;
      userData.contact = response.data.contactNo; 
      userData.aname = response.data.name
      userData.email = response.data.email
      userData.pfp = session.user.image
      setUser(userData)
    });
  }, [session]);
  
  return (
    <div>
      {user ? <Profile uname={user.uname} aname={user.aname} role={user.role} eno={user.eno} contact={user.contact} email={user.email} pfp={user.pfp}/> : <div>loading</div>}
    </div>
  );
}

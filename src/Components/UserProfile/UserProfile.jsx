import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserProfile = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  return (
    <div>
      <h2>This is the user profile sectioin</h2>
    </div>
  );
};

export default UserProfile;

import { useAuth0 } from "@auth0/auth0-react";
import "../Landing/output.css";

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { isAuthenticated, user } = useAuth0();
  console.log("user data? ==> ", user);

  const isLoading = false;
  // const user = true;

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div>
      <img src={user.picture} alt="User Image"/>
      <h3>{user.name}</h3>
      
      <button onClick={() => console.log("click me!")} className="text-lg">Logout</button>
      <div>Profile Page</div>
    </div>

  );
};

export default Profile;

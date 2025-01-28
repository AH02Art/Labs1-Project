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
  const { isAuthenticated, user, logout } = useAuth0();
  console.log("user data ==> ", user);

  // const isLoading = false;

  // if (isLoading || !user) {
  //   return <div className='text-center p-4'>Loading...</div>;
  // }

  if (isAuthenticated) {
    return (
      <div className="flex-c border rounded-lg shadow-2xl m-auto p-8">
        <img className="w-[100px] h-auto rounded-full m-auto" src={user.picture} alt="User Image"/>
        <h3 className="text-3xl font-bold pt-4">{user.name}</h3>
        <p className="text-gray-700 my-4">{user.email}</p>
        <button onClick={() => logout({ returnTo: window.location.origin })} className="text-white bg-blue-500 py-2 px-4 mx-auto rounded-lg">Logout</button>
      </div>
    );
  } else {
    return (
      <div>Nuh uh uh! You gotta log in first! 💀</div>
    )
  }
};

export default Profile;

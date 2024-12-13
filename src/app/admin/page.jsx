import { auth } from "@/auth";
import Dashboard from "@/components/Admin-Componentrs/Dashboard/Dashboard";


const AdminPage = async () => {

  const session = await auth();
  const loggedInUser = session?.user;
  console.log(loggedInUser);


  return (

    <div><Dashboard /></div>
  )
}
export default AdminPage
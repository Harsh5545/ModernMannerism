// import { Dashboard } from "@mui/icons-material";
import Dashboard from "@/components/Admin-Componentrs/Dashboard/Dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {

  // const session = await getServerSession();
  // console.log(session);
  
  // if (!session ) {
  //   redirect('/');
  // };

  return (
    // <div>AdminPage</div><>
<div><Dashboard/></div>
  )
}
export default AdminPage
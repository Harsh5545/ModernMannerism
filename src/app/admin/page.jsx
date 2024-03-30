import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {

  const session = await getServerSession();
  console.log(session);
  
  if (!session ) {
    redirect('/');
  };

  return (
    <div>AdminPage</div>
  )
}
export default AdminPage
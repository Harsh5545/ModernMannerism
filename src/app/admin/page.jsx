import { auth } from "@/auth";
import Dashboard from "@/components/Admin-Componentrs/Dashboard/Dashboard";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Children } from "react";


const AdminPage = async ({ Children }) => {

  const session = await auth();
  const loggedInUser = session?.user;
  console.log(loggedInUser);


  return (

    <div className="p-6 bg-gray-100 dark:bg-gray-800 bg-opacity-25 dark:bg-[#122031] min-h-screen">
      Hello
    </div>
  )
}
export default AdminPage
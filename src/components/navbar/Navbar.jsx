
import { getServerSession } from "next-auth";
import Header from "./Header";
import { options } from "@/app/api/auth/[...nextauth]/options";


const Navbar = async () => {
   

    return (
        <div>
            <Header  />
        </div>

    );
};

export default Navbar;

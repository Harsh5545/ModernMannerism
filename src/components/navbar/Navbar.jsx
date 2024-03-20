import { auth } from "@/lib/auth";
import AllLinks from "./links/AllLinks";

import Header from "./Header";


const Navbar = async () => {
    
  const session = await auth();

  console.log(session);

     

  
    return (
        <div    >
            {/* <div className={styles.logo}>Logo</div>
            <div>
                <AllLinks session={session} />
            </div> */}
        <Header session={session}/>
        </div>
     
    );
};

export default Navbar;

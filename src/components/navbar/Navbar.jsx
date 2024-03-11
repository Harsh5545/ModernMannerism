

import { auth } from "@/lib/auth";
import AllLinks from "./links/AllLinks";
import styles from "./navbar.module.css";

const Navbar = async () => {
    
  const session = await auth();

  console.log(session);

    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div>
                <AllLinks session={session} />
            </div>
        </div>
    );
};

export default Navbar;


import StyleSheet from "./links.module.css";
import Navlink from "../navlink/Navlink";
import { signOut, useSession } from 'next-auth/react'



const AllLinks = () => {

    const { data: session } = useSession();
    // console.log(session, 'session');

    const links = [
        { title: "Home", path: "/", },
        { title: "About", path: "/about", },
        { title: "Services", path: "/service" },
        { title: "Blog", path: "/blog", },
    ];

    return (
        <div >
            <div className="flex md:flex-row flex-col" >
                {links.map((link, i) => (
                    <Navlink item={link} key={i} />
                ))}
                {/* {
                    session ?
                        (
                            <>
                                {
                                    session?.isAdmin ? (
                                        <Navlink item={{ title: "Admin", path: "/admin" }} />
                                    ) : (<Navlink item={{ title: "Dashboard", path: "/member" }} />)
                                }
                                <button onClick={() => { signOut() }} className={StyleSheet.logout}>Logout {' '} {session?.name}</button>
                            </>
                        ) :
                        (
                            <>
                                <Navlink item={{ title: "Login", path: "/login" }} />
                                <Navlink item={{ title: "Register", path: "/register" }} />
                            </>
                        )
                } */}
            </div>
        </div>
    );
};

export default AllLinks;

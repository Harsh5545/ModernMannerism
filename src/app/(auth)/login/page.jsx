import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";
import { auth } from "@/lib/auth"
import { Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";
import Link from "next/link";
const LoginPage = async () => {

    const session = await auth();
    console.log(session);



    return (<>


        <Card className="max-w-[400px]  mx-auto">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <form action={handleGithubLogin}>
                    <button>Login with Git Hub</button>
                </form>
                <form action={handleGoogleLogin}>
                    <button>Login with Google</button>
                </form>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
    </>
    )
}
export default LoginPage
import FacebookIcon from "@/components/Icons/FacebookIcon";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";
import { auth } from "@/lib/auth"
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input } from "@nextui-org/react";
import Link from "next/link";
const LoginPage = async () => {

    const session = await auth();
    console.log(session);



    return (
        <div className="h-[100vh] flex items-center justify-center">
            <Card isFooterBlurred className="md:max-w-[40%] absolute w-[90%] mx-auto " >
                <CardHeader className="flex flex-col justify-center text-center">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="">
                        <p className="text-md">NextUI</p>
                        <p className="text-small text-default-500">nextui.org</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col justify-center items-center">
                    <div  className="flex w-[70%] mx-auto flex-col">
                        <Input type="email" color="primary" variant="underlined" label="Email" className="mt-5"/>
                        <Input type="password" color="primary" variant="underlined" label="Password" className="mt-5"/>
                           
                         <Button size="md" className="mt-5 w-[30%] mx-auto">Login</Button>
                    </div>
                        <hr />
                        <hr />
                    <div className="flex gap-4 mt-5">
                        <form action={handleGithubLogin}>
                            <Button type="submit" startContent={<FacebookIcon />}>Google</Button>
                        </form>
                        <form action={handleGoogleLogin}>
                            <Button type="submit" startContent={<GoogleIcon />}>Google</Button>
                        </form>
                    </div>
                </CardBody>
                <Divider />
                <CardFooter className="text-center flex justify-center">
                    <Link

                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
export default LoginPage
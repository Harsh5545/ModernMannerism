
import { Input } from "@nextui-org/react";
export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="email" label="Email" className="auto" />
                <Input type="password" label="Password" />
            </div>
        </div>
    );
}

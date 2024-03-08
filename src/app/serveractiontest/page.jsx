import { sayHello } from '@/lib/action'
import React from 'react'

const ServerActionTestPage = () => {
    const actionInComponent = async () => {
        "use server"
        console.log("it Worked...")
    }
    return (
        <div>
            <form action={actionInComponent}>
                <button>Test Me</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage
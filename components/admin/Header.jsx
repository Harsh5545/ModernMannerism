
import React from 'react'
import Switcher from './Switcher'
import { Button} from '@nextui-org/react'

const Header = ({ title }) => {
    return (
        <div className='flex justify-between px-4 pt-4'>
            <div><h2 className='p-2'>{title}</h2></div>
            <div className='flex'>
                <div>
                    <h2 className='p-2'>Welcome Back, Admin.</h2>
                </div>
                <div className='flex gap-3'>
                    <Button>Logout</Button>
                    <div><Switcher /></div>
                </div>
            </div>
        </div>
    )
}

export default Header
import React from 'react'


const Header = ({ title }) => {
    return (
        <div className='flex justify-between m-2 bg-white'>
            <h2 className='p-2'>{title}</h2>
            <h2 className='p-2'>Welcome Back, Admin.</h2>

        </div>
    )
}

export default Header
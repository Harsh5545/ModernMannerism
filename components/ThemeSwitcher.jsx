"use client"

import React, { useState } from 'react'
import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme()
    return (
        <div className='flex gap-4'>
            <Button size='sm' variant='flat' onClick={() => setTheme('light')}>Light</Button>
            <Button size='sm' variant='flat' onClick={() => setTheme('dark')}>Dark</Button>
            <Button size='sm' variant='flat' onClick={() => setTheme('modern')}>Modern</Button>
        </div>
    )
}

export default ThemeSwitcher
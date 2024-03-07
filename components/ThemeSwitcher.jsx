"use client"

import React, { useState } from 'react'
import {  Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { SunIcon } from './admin/Icons/SunIcon';
import { MoonIcon } from './admin/Icons/MoonIcon';


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme()
    return (
       <Switch  onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "dark" : "light")}
            defaultSelected
            size="sm"
            color="secondary"
            
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        >
        </Switch>
    )
}

export default ThemeSwitcher
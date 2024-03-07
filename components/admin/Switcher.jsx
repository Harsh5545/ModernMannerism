"use client"

import React, { useState } from 'react'
import { useTheme } from 'next-themes';
import { Switch } from "@nextui-org/react";
import { SunIcon } from './Icons/SunIcon';
import { MoonIcon } from './Icons/MoonIcon';

const Switcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    return (

        <Switch  onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "dark" : "light")}
            defaultSelected
            size="lg"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        >
        </Switch>
    )
}

export default Switcher
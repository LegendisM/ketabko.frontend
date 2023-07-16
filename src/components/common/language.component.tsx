"use client"

import { Switch } from "@mui/material";
import { useToggle } from "react-use";

export default function Language() {
    const [toggled, setToggle] = useToggle(true);

    const onLanguageChange = () => {
        
    }

    return (
        <Switch aria-label={'English'} checked={toggled} onClick={onLanguageChange} />
    );
}
import { Button } from "@mui/material";
import React from "react";


    interface IBtnSettings {
        on: boolean;
        reset: () => void;
        toggle: () => void;
    }

function CountdownButton({on, reset, toggle}: IBtnSettings) {
    return (
        <div>
            <Button onClick={toggle}>
                {on ? 'Pause' : 'Start'}
            </Button>
            <Button onClick={reset} color="secondary">
                Reset
            </Button>
        </div>
    )
}

export default CountdownButton;
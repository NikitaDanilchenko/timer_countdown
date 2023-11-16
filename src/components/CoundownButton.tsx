import { Box, Button } from "@mui/material";
import React from "react";


    interface IBtnSettings {
        on: boolean;
        reset: () => void;
        toggle: () => void;
    }

function CountdownButton({on, reset, toggle}: IBtnSettings) {
    return (
        <Box>
            <Button onClick={toggle}>{on ? 'Pause' : 'Start'}
            </Button>
            <Button onClick={reset} color="secondary">Reset</Button>
        </Box>
    )
}

export default CountdownButton;
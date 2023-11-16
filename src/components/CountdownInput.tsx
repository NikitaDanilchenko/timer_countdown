import { Input, Slider } from "@mui/joy";
import React, { useState } from "react";

interface CountdownInputProps {
    onSetTime: (seconds: number, minutes: number) => void;
    disabled: boolean;
}

// export default function CountdownInput({onSetTime, disabled}: CountdownInputProps) {
//     const [second, setSeconds] = useState<number>(0);
//     const [minutes, setMinutes] = useState<number>(0);

    
const CountdownInput = ({onSetTime, disabled}: CountdownInputProps) => {
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    const handleSeconds = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSeconds = Number(event.target.value);
        if(newSeconds >= 0 && newSeconds < 60) {
            setSeconds(newSeconds);
            onSetTime(newSeconds, seconds);
        }
    }

    const handleMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinutes = Number(event.target.value);
        if(newMinutes >= 0 && newMinutes <= 720) {
            setMinutes(newMinutes);
            onSetTime(newMinutes, minutes);
        }
    }

    const handleSlider = (event: Event, newValue: number | number[]) => {
        const newSeconds = ((newValue as number) % 4) * 15;
        const newMinutes = Math.floor(newValue as number) / 4;
        setSeconds(seconds);
        setMinutes(minutes);
        onSetTime(newSeconds, newMinutes)
    }
    return (
       <div>
        <h3>minutes</h3>
        <Input 
        sx={{width: 150, marginLeft: '500px'}}
        color="primary"
        variant="soft"
        placeholder=""
        disabled={disabled}
        onChange={handleMinutes}
        value={minutes}
        type='number'
        />

        <h3>seconds</h3>
        <Input 
        sx={{width: 150, marginLeft: '500px'}}
        color="primary"
        variant="soft"
        placeholder=""
        disabled={disabled}
        onChange={handleSeconds}
        value={seconds}
        type='number'
        />

        <Slider 
        sx={{width: 400}}
        disabled={disabled}
        onChange={handleSlider}
        value={minutes * 4 + Math.floor(seconds / 15)}
        min={0}
        max={2880}
        />
       </div>
        
        
        
    )
}

export default CountdownInput;

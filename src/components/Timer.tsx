import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { STimer } from '../assets/styles/style';
import { Button, Typography } from '@mui/material';

const Timer: FC = React.memo(() => {

const [timerOn, setTimerOn] = useState(false);
const [timer, setTimer] = useState(0);
const interval = useRef<NodeJS.Timeout | null>(null);
    
    useEffect(() => {
    if(timerOn) {
       setTimeout(() => {
        interval.current = setTimeout (() => {
            setTimer(prevTimer => prevTimer + 10)})
        }, 10);
        
    } else if(!timerOn && timer !== 0)
    if (interval.current) {
        clearTimeout(interval.current)
        interval.current = null
       }
    }, [timer, timerOn]);

    const start = useCallback(() =>{
        setTimerOn(prevState => !prevState)
    }, []);

    const reset = useCallback(() => {
        setTimer(0);
        setTimerOn(false)
    }, []);


     const formatTime = useCallback(() => {
            const getTime = (ms: number) => {
                const minutes = '0' + Math.floor(ms / 60000);
                const sec = '0' + Math.floor((ms % 60000) / 1000);
                const miliSec = Math.floor(ms % 1000);
                return [minutes, sec, miliSec];
            };
            const [minutes, sec, miliSec] = getTime(timer);
            return `${minutes}:${sec}:${miliSec}`
        }, [timer]); 


return (
        <STimer>
            <Typography variant='h4'>Timer</Typography>
            <Typography variant='h3'>{formatTime()}</Typography>
            <Button variant="contained" onClick={start}>
                {timerOn ? 'pause' : 'start'}
            </Button>
            <Button variant="contained" color='success' onClick={reset}>
                reset
            </Button>
                
        </STimer>
    );
});
export default Timer;

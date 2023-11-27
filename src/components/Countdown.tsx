import { Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { SCountdown } from '../assets/styles/style';
import CountdownInput from './CountdownInput';
import CountdownButton from './CoundownButton';

const Countdown: FC = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [secondInput, setSecondsInput] = useState(0);
    const [minutesInput, setMinutesInput] = useState(0);
    const [on, setOn] = useState(false);
    
    function playAudio() {
        const audioUrl = process.env.PUBLIC_URL + 'https://zvukitop.com/wp-content/uploads/antic-ios-17.mp3';
        const audio = new Audio(audioUrl);
        audio.play();
        // .then(() => {
        //     console.log('Аудио воспроизводится');
        // })
        // .catch(error => {
        //     console.error('Произошла ошибка при воспроизведении аудио:', error);
        // });
    }

    useEffect(() => {
        setMinutes(minutesInput);
        setSeconds(secondInput);
    }, [minutesInput, secondInput]);

    useEffect(() => {
        let interval: NodeJS.Timer;
        if(on) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    clearInterval(interval);
                    playAudio();
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [on, minutes, seconds]);

    


    const reset = () => {
        setMinutesInput(0);
        setSecondsInput(0);
        setOn(false)
    };



    const toggle = () => {
        if(!on) {
            setOn(true)
        } else {
            setOn(false)
        }
    }

    const handleSetTime = (minutes: number, seconds: number) => {
        setMinutesInput(minutes);
        setSecondsInput(seconds);
    }

    return (
    <SCountdown>
       <Typography variant='h4'>Countdown</Typography>
       <CountdownInput onSetTime={handleSetTime} disabled={on}/> 
       <Typography variant='h4'>
        {minutes}: {seconds < 10 ? `0${seconds}` : seconds}
       </Typography>
       <CountdownButton on={on} toggle={toggle} reset={reset}/>
    </SCountdown>
    )
};
export default Countdown;

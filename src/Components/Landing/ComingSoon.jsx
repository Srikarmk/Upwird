import React from 'react'
import logo from "../../assets/upwird-logo.png"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const ComingSoon = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April, 30, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-5 w-screen h-screen landingbg'>
            <Link to="/"><img src={logo} alt="logo" className='mx-auto py-1' width={150} /></Link>
            <h1 className='text-6xl font-bold text-center mt-40'>Coming Soon</h1>
            <p className='text-4xl font-semibold text-center mt-10'>in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds</p>
            <div className=' text-center mt-80 font-bold'>
                Follow Us Here<br></br>
                <Link to="https://www.instagram.com/upwirdhq/" target='blank'>
            <FontAwesomeIcon icon={faInstagram} size={'2x'} className='mt-2'  /></Link></div>

    </div>
  )
}

export default ComingSoon

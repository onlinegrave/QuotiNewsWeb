import React, { useState, useEffect } from 'react';
import SplashIcon from "./../assets/images/splash_screen_two.png";

export interface SplashProps {
  children?: React.ReactNode
}

const Splash: React.FC<SplashProps> = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return <>
    {!show ? <div className='h-screen w-screen'>
      <div className="flex flex-col gap-4 items-center justify-center  h-full">
        <div className='max-w-sm'>
          <div className='text-center font-semibold text-3xl mb-16'>QuotiNews</div>
          <div className='text-center mb-24'>Explore trending news</div>
          <img src={SplashIcon} className='cover' alt="splash" />
        </div>
      </div>
    </div>
      : <div>
        {children}
      </div>}
  </>
}

export default Splash;

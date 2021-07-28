import { FC, useState } from 'react';
import { GoogleButton } from '../button/GoogleButton';
import google from '../../images/flat-color-icons_google.png';
import { Login } from '../../pages/user/Login';
import { Register } from '../../pages/user/Register';

export const Form: FC = (props) => {
  const [mode, setMode] = useState<string>('register');

  return (
    <>
      <h1 className='text-center text-[32px] text-[#333333] font-medium mb-[15px]'>
        {mode === 'register' ? 'Register to app' : 'Login to app'}
      </h1>
      <div className='text-center'>
        <GoogleButton className='border-[2px] w-[400px] h-[65px] mt-[25px] rounded-[40px] focus:ring-[3px] focus:border-none focus:outline-none'>
          <div className='flex items-center'>
            <img className='ml-[15px]' src={google} alt={google} />
            <p className='text-center relative left-12 text-[22px] text-[#333333] font-medium'>
              Continue with Google
            </p>
          </div>
        </GoogleButton>
      </div>
      <div className='text-center mt-[20px] text-[#AFAEAE] text-[25px] mt-[30px]'>
        <p>or</p>
      </div>
      <div>
        {mode === 'register' ? (
          <Register mode={mode} setMode={setMode} />
        ) : (
          <Login mode={mode} setMode={setMode} />
        )}
      </div>
    </>
  );
};

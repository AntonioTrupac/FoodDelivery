import { FC, useState } from 'react';
import { Login } from '../../pages/user/Login';
import { Register } from '../../pages/user/Register';

export const Form: FC = () => {
   const [mode, setMode] = useState<string>('register');

   return (
      <>
         <h1 className='text-center text-[32px] font-medium text-[#333333] mb-[15px]'>
            {mode === 'register' ? 'Register to app' : 'Login to app'}
         </h1>

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

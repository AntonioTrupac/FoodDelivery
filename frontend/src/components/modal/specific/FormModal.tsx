import React, {FC} from 'react';

type FormModalProps = {
   onSubmit?: () => void;
}

export const FormModal : FC<FormModalProps> = (props) => {
   return (
      <>
         <form>
            <div className='flex justify-center items-center h-[100%] flex-col'>
            <input type='text' className='w-[120px] h-[40px] border-2'/>
            <button className='w-[60px] h-[30px] border-2' type='submit' onSubmit={props.onSubmit}>Login</button>
            </div>
         </form>
      </>
   )
}
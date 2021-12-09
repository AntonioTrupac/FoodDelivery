import { Dispatch, FC, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type DrawerProps = {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   headerText: string;
};

export const Drawer: FC<DrawerProps> = (props) => {
   return (
      <main
         className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-30 inset-0 transform ease-in-out 
            ${
               props.isOpen
                  ? 'transition-opacity opacity-100 duration-500 translate-x-0'
                  : 'transition-all delay-500 opacity-0 translate-x-full'
            }`}
      >
         <section
            className={`w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
               ${props.isOpen ? 'translate-x-0' : 'translate-x-full'}`}
         >
            <article className='relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full'>
               <header className='p-4 font-bold text-lg'>
                  <div className='flex items-center justify-between'>
                     <p>{props.headerText}</p>

                     <div className=''>
                        <FontAwesomeIcon
                           aria-label='Close'
                           data-dissmis='modal'
                           size='1x'
                           icon={faTimes}
                           onClick={() => props.setIsOpen(false)}
                           className=' text-[#606060] border-none rounded-[2px] bg-none hover:text-[#FEAE67]'
                        />
                     </div>
                  </div>
               </header>
               {props.children}
            </article>
         </section>
         <section
            className='w-screen h-full cursor-pointer '
            onClick={() => {
               props.setIsOpen(false);
            }}
         ></section>
      </main>
   );
};

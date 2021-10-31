import { FC } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Form } from '../forms/Form';

type ModalProps = {
   isShown: boolean;
   hide: () => void;
   modalContent?: JSX.Element;
   headerText: string;
};

export const Modal: FC<ModalProps> = (props) => {
   const modal = (
      <>
         <div
            onClick={props.hide}
            className='fixed w-[100%] h-[100%] top-0 left-0  bg-[#ffdfc1] z-40 bg-opacity-50 backdrop-filter backdrop-blur-[4px]'
         />
         <div className='flex justify-center items-center'>
            <div
               aria-modal
               aria-labelledby={props.headerText}
               tabIndex={-1}
               role='dialog'
               className='absolute top-[120px] mx-5 z-50 bg-[#ffffff] h-auto rounded-[20px]'
            >
               <div className='z-40 flex flex-row-reverse mr-[20px]'>
                  <FontAwesomeIcon
                     aria-label='Close'
                     data-dissmis='modal'
                     icon={faTimes}
                     onClick={props.hide}
                     className='text-[20px] text-[#606060] border-none rounded-[2px] bg-none my-4 flex flex-col-reverse hover:text-[#FEAE67]'
                  />
               </div>

               <div className='h-[100%] mb-[35px] px-16 sm:px-10'>
                  {props.children}
               </div>
            </div>
         </div>
      </>
   );

   const portalDiv = document.getElementById('modal');

   return props.isShown && portalDiv ? createPortal(modal, portalDiv) : null;
};

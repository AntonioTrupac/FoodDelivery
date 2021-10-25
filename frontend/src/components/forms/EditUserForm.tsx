import { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';

import { CustomInput } from '../input/CustomInput';
import { Button } from '../button/Button';
import { useMeQuery } from '../../generated';

type Values = {
   firstName: string;
   lastName: string;
   phoneNumber: string;
   email: string;
};

export const EditUserForm = () => {
   const { data, loading, error } = useMeQuery();

   const initialValues = {
      firstName: data?.me?.firstName || '',
      lastName: data?.me?.lastName || '',
      phoneNumber: data?.me?.phoneNumber || '',
      email: data?.me?.email || '',
   };

   return (
      <>
         <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            {(propsFormik: FormikProps<Values>) => (
               <Form>
                  <div className='flex flex-col justify-center items-center'>
                     <CustomInput
                        name='firstName'
                        placeholder='First Name'
                        value={propsFormik.values.firstName}
                        type='text'
                        autoComplete='off'
                        className='input text-lg'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='lastName'
                        placeholder='Last Name'
                        value={propsFormik.values.lastName}
                        type='text'
                        autoComplete='off'
                        className='input text-lg'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='email'
                        placeholder='Email'
                        value={propsFormik.values.email}
                        type='text'
                        autoComplete='off'
                        className='input text-lg'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='phoneNumber'
                        placeholder='Phone Number'
                        value={propsFormik.values.phoneNumber}
                        type='text'
                        autoComplete='off'
                        className='input text-lg'
                        onChange={propsFormik.handleChange}
                     />
                     <Button
                        type='submit'
                        className='border px-2.5 py-1.5 rounded-lg border-[#FEAE67] text-sm'
                     >
                        Submit
                     </Button>
                  </div>
               </Form>
            )}
         </Formik>
      </>
   );
};

import { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';

import { CustomInput } from '../input/CustomInput';
import { Button } from '../button/Button';

type Values = {
   firstName: string;
   lastName: string;
   phoneNumber: string;
   email: string;
};

const initialValues = {
   firstName: '',
   lastName: '',
   phoneNumber: '',
   email: '',
};

export const EditUserForm = () => {
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
                        className='input'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='lastName'
                        placeholder='Last Name'
                        value={propsFormik.values.lastName}
                        type='text'
                        autoComplete='off'
                        className='input'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='email'
                        placeholder='Email'
                        value={propsFormik.values.email}
                        type='text'
                        autoComplete='off'
                        className='input'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='phoneNumber'
                        placeholder='Phone Number'
                        value={propsFormik.values.phoneNumber}
                        type='text'
                        autoComplete='off'
                        className='input'
                        onChange={propsFormik.handleChange}
                     />
                     <Button type='submit'>Submit</Button>
                  </div>
               </Form>
            )}
         </Formik>
      </>
   );
};

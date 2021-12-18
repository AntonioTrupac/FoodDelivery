import { FC, useCallback } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';

import { CustomInput } from '../input/CustomInput';
import { Button } from '../button/Button';
import { MeDocument, useUpdateUserMutation } from '../../generated';
import { editUserValidation } from '../../validation';
import { ValidationError } from '../validationError/ValidationError';

type EditUserFormProps = {
   data: Values & { id: string };
};

type Values = {
   firstName: string;
   lastName: string;
   email: string;
   phoneNumber: string;
};

export const EditUserForm: FC<EditUserFormProps> = ({ data }) => {
   const history = useHistory();
   const id = Number(data.id);

   const [updateUserMutation, { loading, error }] = useUpdateUserMutation();

   const initialValues = {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phoneNumber: data.phoneNumber || '',
   };

   const handleSubmit = useCallback(
      (values: Values) => {
         updateUserMutation({
            variables: {
               id: id,
               input: values,
            },
            refetchQueries: [{ query: MeDocument }],
         })
            .then((data) => {
               console.log('SENT', data);
            })
            .catch((error) => {
               console.log('Error!', error);
            });

         history.push('/');
      },
      [history, id, updateUserMutation]
   );

   if (loading) return <div> loading ...</div>;
   if (error) return <div>{error.message}</div>;

   return (
      <>
         <Formik
            initialValues={initialValues}
            validationSchema={editUserValidation}
            onSubmit={(values) => {
               handleSubmit(values);
            }}
         >
            {({ errors, touched, ...propsFormik }: FormikProps<Values>) => (
               <Form>
                  <div className='flex flex-col justify-center items-center'>
                     <div className='w-full relative'>
                        <CustomInput
                           name='firstName'
                           placeholder='First Name'
                           value={propsFormik.values.firstName}
                           type='text'
                           autoComplete='off'
                           className='input text-lg'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='firstName'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <div className='w-full relative'>
                        <CustomInput
                           name='lastName'
                           placeholder='Last Name'
                           value={propsFormik.values.lastName}
                           type='text'
                           autoComplete='off'
                           className='input text-lg'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='lastName'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <div className='w-full relative'>
                        <CustomInput
                           name='phoneNumber'
                           placeholder='Phone Number'
                           value={propsFormik.values.phoneNumber}
                           type='text'
                           autoComplete='off'
                           className='input text-lg'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='phoneNumber'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <div className='w-full relative'>
                        <CustomInput
                           name='email'
                           placeholder='Email'
                           value={propsFormik.values.email}
                           type='text'
                           autoComplete='off'
                           className='input text-lg'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='email'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

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

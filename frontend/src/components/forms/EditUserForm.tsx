import { Form, Formik, FormikProps } from 'formik';

import { CustomInput } from '../input/CustomInput';
import { Button } from '../button/Button';
import { MeDocument, MeQuery, useUpdateUserMutation } from '../../generated';
import { useHistory } from 'react-router-dom';
import { FC, useCallback } from 'react';

type EditUserFormProps = {
   data: MeQuery | undefined;
};

type Values = {
   firstName: string;
   lastName: string;
   email: string;
   phoneNumber: string;
};

export const EditUserForm: FC<EditUserFormProps> = ({ data }) => {
   const history = useHistory();
   const id = Number(data?.me?.userId);

   const [updateUserMutation, { loading, error }] = useUpdateUserMutation();

   const initialValues = {
      firstName: data?.me?.firstName || '',
      lastName: data?.me?.lastName || '',
      email: data?.me?.email || '',
      phoneNumber: data?.me?.phoneNumber || '',
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
            onSubmit={(values) => {
               setTimeout(() => {
                  if (values.email === data?.me?.email) {
                     console.log('email already exists!');
                     return;
                  } else {
                     handleSubmit(values);
                  }
               }, 2000);
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

import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';

import { CustomInput } from '../../components/input/CustomInput';
import { Button } from '../../components/button/Button';
import {
   AddressInput,
   Exact,
   useRegisterMutation,
} from '../../generated';
import { registerValidationSchema } from '../../validation';
import { ValidationError } from '../../components/validationError/ValidationError';

type RegisterProps = {
   mode: string;
   setMode: Dispatch<SetStateAction<string>>;
};

type Values = {
   firstName: string;
   lastName: string;
   phoneNumber: string;
   email: string;
   password: string;
   city: string;
   streetAddress: string;
   houseNumber: string;
};

const initialValues = {
   firstName: '',
   lastName: '',
   phoneNumber: '',
   email: '',
   password: '',
   city: '',
   streetAddress: '',
   houseNumber: '',
};

type Input =
   | Exact<{
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        password: string;
        address: AddressInput;
     }>
   | undefined;

export const Register: FC<RegisterProps> = (props) => {
   const [register] = useRegisterMutation();

   const userInfo = useCallback(
      (data: Input) => {
         register({
            variables: data,
         })
            .then((res) => {
               const response = res.data?.register;
               if (response) {
                  console.log('OVO JE RESPONSE', response);
               }
            })
            .catch((err) => {
               console.error('err', err.message);
               console.error(err);
            });
      },
      [register]
   );

   const saveData = useCallback(
      (submittedValues: FormikValues) => {
         if (submittedValues) {
            console.log('%c \nREGISTERING USER\n', 'color: red');
            const {
               firstName,
               lastName,
               email,
               password,
               phoneNumber,
               city,
               streetAddress,
               houseNumber,
            } = submittedValues;

            const houseNum = parseInt(houseNumber);

            const address: AddressInput = {
               city,
               streetAddress,
               houseNumber: houseNum,
            };

            const data = {
               firstName,
               lastName,
               email,
               password,
               phoneNumber,
               address,
            };

            userInfo(data);
         }
      },
      [userInfo]
   );

   const onSubmit = (values: FormikValues) => {
      saveData(values);
   };

   const onClick = (e: any): void => {
      e.preventDefault();
      props.setMode('login');
   };

   return (
      <div>
         <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values: FormikValues, { setSubmitting, resetForm }) => {
               setSubmitting(true);
               setTimeout(() => {
                  onSubmit(values);
                  resetForm();

                  props.setMode('login');
               }, 2000);
            }}
         >
            {({ errors, touched, ...propsFormik }: FormikProps<Values>) => (
               <Form>
                  <div className='register__container'>
                     <div className='w-full relative'>
                        <CustomInput
                           name='firstName'
                           type='text'
                           placeholder='First name'
                           value={propsFormik.values.firstName}
                           className='input'
                           autoComplete='off'
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
                           type='text'
                           placeholder='Last name'
                           autoComplete='off'
                           value={propsFormik.values.lastName}
                           className='input'
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
                           type='tel'
                           pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                           placeholder='Phone number'
                           autoComplete='off'
                           value={propsFormik.values.phoneNumber}
                           className='input'
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
                           name='city'
                           type='text'
                           placeholder='City'
                           autoComplete='off'
                           value={propsFormik.values.city}
                           className='input'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='city'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <div className='w-full relative'>
                        <CustomInput
                           name='streetAddress'
                           type='text'
                           placeholder='Street Address'
                           autoComplete='off'
                           value={propsFormik.values.streetAddress}
                           className='input'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='streetAddress'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <div className='w-full relative'>
                        <CustomInput
                           name='houseNumber'
                           type='text'
                           placeholder='House Number'
                           autoComplete='off'
                           value={propsFormik.values.houseNumber}
                           className='input'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='houseNumber'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <div className='w-full relative'>
                        <CustomInput
                           name='email'
                           type='text'
                           placeholder='Email'
                           value={propsFormik.values.email}
                           autoComplete='off'
                           className='input'
                           onChange={propsFormik.handleChange}
                        />

                        <ValidationError
                           fieldName='email'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <div className='w-full relative'>
                        <CustomInput
                           name='password'
                           type='password'
                           placeholder='Password'
                           autoComplete='off'
                           value={propsFormik.values.password}
                           className='input'
                           onChange={propsFormik.handleChange}
                        />
                        <ValidationError
                           fieldName='password'
                           component='span'
                           className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'
                        />
                     </div>

                     <Button
                        type='submit'
                        disabled={propsFormik.isSubmitting}
                        className='form__button'
                     >
                        Sign up
                     </Button>

                     <div className='register__link'>
                        <p className='text-[#AFAEAE]'>
                           Have an account?{' '}
                           <a
                              href='#'
                              onClick={onClick}
                              className='text-[#FEAE67]'
                           >
                              Log in
                           </a>
                        </p>
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

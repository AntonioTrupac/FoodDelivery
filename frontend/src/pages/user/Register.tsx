import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';

import { CustomInput } from '../../components/input/CustomInput';
import { Button } from '../../components/button/Button';
import { RegisterInput, useRegisterMutation } from '../../generated';
import { registerValidationSchema } from '../../validation';

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
};

const initialValues = {
   firstName: '',
   lastName: '',
   phoneNumber: '',
   email: '',
   password: '',
};

export const Register: FC<RegisterProps> = (props) => {
   const [register] = useRegisterMutation();

   const userInfo = useCallback(
      (data: RegisterInput) => {
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
            const { firstName, lastName, email, password, phoneNumber } =
               submittedValues;
            const data: RegisterInput = {
               firstName,
               lastName,
               email,
               password,
               phoneNumber,
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
                        {/* TODO: CREATE A COMPONENT FOR ERROR DISPLAY */}
                        {errors.firstName && touched.firstName && (
                           <span className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'>
                              {errors.firstName}
                           </span>
                        )}
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
                        {errors.lastName && touched.lastName && (
                           <span className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'>
                              {errors.lastName}
                           </span>
                        )}
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
                        {errors.phoneNumber && touched.phoneNumber && (
                           <span className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'>
                              {errors.phoneNumber}
                           </span>
                        )}
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
                        {errors.email && touched.email && (
                           <span className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'>
                              {errors.email}
                           </span>
                        )}
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
                        {errors.password && touched.password && (
                           <span className='mt-0 absolute top-7 text-[12px] left-0 text-red-500'>
                              {errors.password}
                           </span>
                        )}
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

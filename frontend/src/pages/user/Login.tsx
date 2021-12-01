import React, { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';

import { CustomInput } from '../../components/input/CustomInput';
import { Button } from '../../components/button/Button';
import { MutationLoginArgs, useLoginMutation } from '../../generated';
import { useHistory } from 'react-router-dom';
import { setAccessToken } from '../../accessToken';
import { loginValidationSchema } from '../../validation';

type LoginProps = {
   mode: string;
   setMode: Dispatch<SetStateAction<string>>;
};

type Values = {
   email: string;
   password: string;
};

const initialValues = {
   email: '',
   password: '',
};

export const Login: FC<LoginProps> = (props) => {
   const history = useHistory();
   const [login] = useLoginMutation();

   const loginInfo = useCallback(
      (data: MutationLoginArgs) => {
         login({
            variables: data,
         })
            .then((res) => {
               if (res && res.data && res.data.login?.accessToken) {
                  console.log('LOGIN RESPONSE', res.data);
                  setAccessToken(res.data.login?.accessToken);
                  history.push('/');
               }
            })
            .catch((err) => {
               console.error('ERR', err.message);
            });
      },
      [history, login]
   );

   const saveData = useCallback(
      (submittedValues: FormikValues) => {
         if (submittedValues) {
            console.log('%c \nLOGGING USER IN\n', 'color: red');
            const { email, password } = submittedValues;
            const data: MutationLoginArgs = {
               email,
               password,
            };
            loginInfo(data);
         }
      },
      [loginInfo]
   );

   const onSubmit = (values: FormikValues) => {
      saveData(values);
   };
   return (
      <div>
         <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={onSubmit}
         >
            {({ errors, touched, ...propsFormik }: FormikProps<Values>) => (
               <Form>
                  <div className='login__container'>
                     <div className='w-full relative'>
                        <CustomInput
                           name='email'
                           placeholder='Email'
                           value={propsFormik.values.email}
                           type='text'
                           className='input'
                           autoComplete='off'
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

                     <Button type='submit' className='form__button'>
                        Log in
                     </Button>

                     <div className='link__container'>
                        <p className='text-[#AFAEAE]'>
                           New to App?{' '}
                           <a
                              href='#'
                              onClick={(e: any) => {
                                 e.preventDefault();
                                 props.setMode('register');
                              }}
                              className='text-[#FEAE67]'
                           >
                              Sign Up
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

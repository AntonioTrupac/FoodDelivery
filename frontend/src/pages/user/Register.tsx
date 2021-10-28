import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import { CustomInput } from '../../components/input/CustomInput';
import { Button } from '../../components/button/Button';
import { RegisterInput, useRegisterMutation } from '../../generated';

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
         <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(propsFormik: FormikProps<Values>) => (
               <Form>
                  <div className='register__container'>
                     <CustomInput
                        name='firstName'
                        type='text'
                        placeholder='First name'
                        value={propsFormik.values.firstName}
                        className='input'
                        autoComplete='off'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='lastName'
                        type='text'
                        placeholder='Last name'
                        autoComplete='off'
                        value={propsFormik.values.lastName}
                        className='input'
                        onChange={propsFormik.handleChange}
                     />
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
                     <CustomInput
                        name='email'
                        type='text'
                        placeholder='Email'
                        value={propsFormik.values.email}
                        autoComplete='off'
                        className='input'
                        onChange={propsFormik.handleChange}
                     />
                     <CustomInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        autoComplete='off'
                        value={propsFormik.values.password}
                        className='input'
                        onChange={propsFormik.handleChange}
                     />
                     <Button type='submit' className='form__button'>
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

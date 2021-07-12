import React, {Dispatch, FC, SetStateAction, useCallback} from 'react';
import {Form, Formik, FormikProps, FormikValues} from "formik";
import {CustomInput} from "../../components/input/CustomInput";
import {Button} from "../../components/button/Button";
import {useRegisterMutation, RegisterInput} from "../../generated";

type RegisterProps = {
   mode: string;
   setMode: Dispatch<SetStateAction<string>>;
}

type Values = {
   firstName: string;
   lastName: string;
   age: string;
   email: string;
   password: string;
}

const initialValues = {
   firstName: '',
   lastName: '',
   age: '',
   email: '',
   password: '',
}

export const Register: FC<RegisterProps> = (props) => {
   const [register, {data, loading, error}] = useRegisterMutation();

   const userInfo = useCallback((data: RegisterInput) => {
         register({
            variables: data
         }).then((res) => {
            const response = res.data?.register;
            if(response){
               console.log('OVO JE RESPONSE', response);
            }
         }).catch((err) => {
            console.error('err', err.message);
         })
   }, [register]);

   const saveData = useCallback((submittedValues : FormikValues) => {
         if (submittedValues) {
            console.log("%c \nREGISTERING USER\n", "color: red");
            const { firstName, lastName, email, password, age } = submittedValues;
            const data: RegisterInput = {
               firstName,
               lastName,
               email,
               password,
               age
            };
            console.log('User info', data);
            userInfo(data);
         }
   }, [userInfo])

   const onSubmit = (values: FormikValues) => {
      saveData(values);
      alert(JSON.stringify(values, null, 2));
      // actions.setSubmitting(false);
   }
   // TODO: PROMIJENI AGE da nije number nego da imas datum i
   //  onda imas fju koja racuna age, dakle ne primaj number nego string
   
   return (
      <div>
         <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
         >
            {(propsFormik: FormikProps<Values>) => (
               <Form>
                  <div className='flex flex-col justify-center items-center mt-[10px] w-[100%]'>
                     <CustomInput
                        name='firstName'
                        type='text'
                        placeholder='First name'
                        value={propsFormik.values.firstName}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={propsFormik.handleChange}/>
                     <CustomInput
                        name='lastName'
                        type='text'
                        placeholder='Last name'
                        value={propsFormik.values.lastName}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={propsFormik.handleChange}/>
                     <CustomInput
                        name='age'
                        type='text'
                        placeholder='Age'
                        value={propsFormik.values.age}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={propsFormik.handleChange}/>
                     <CustomInput
                        name='email'
                        type='text'
                        placeholder='Email'
                        value={propsFormik.values.email}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={propsFormik.handleChange}/>
                     <CustomInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={propsFormik.values.password}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={propsFormik.handleChange}/>
                     <Button
                        type='submit'
                        className='border-none bg-[#D8D8D8] text-[#FFFFFF] w-[400px] h-[65px] mt-[25px] rounded-[40px] focus:ring-[3px] focus:border-none focus:outline-none'
                     >
                        Sign up
                     </Button>
                     <div className='mt-[30px] text-[18px]'>
                        <p className='text-[#AFAEAE]'>Have an account? <a href='#' onClick={(e: any) => {
                           e.preventDefault();
                           props.setMode('login')
                        }} className='text-[#FEAE67]'>Log in</a></p>
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}
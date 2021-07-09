import React, {Dispatch, FC, SetStateAction} from 'react';
import {Form, Formik, FormikProps} from "formik";
import {CustomInput} from "../../components/input/CustomInput";
import {Button} from "../../components/button/Button";

type LoginProps = {
   mode: string;
   setMode: Dispatch<SetStateAction<string>>;
}

type Values = {
   email: string;
   password: string;
}

const initialValues = {
   email: '',
   password: ''
}


export const Login: FC<LoginProps> = (props) => {

   return (
      <div>
         <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
               alert(JSON.stringify(values, null, 2));
               actions.setSubmitting(false);
            }}
         >
            {(propsFormik: FormikProps<Values>) => (
               <Form>
                  <div className='flex flex-col justify-center items-center mt-[20px] w-[100%]'>
                     <CustomInput
                        name='email'
                        placeholder='Email'
                        value={propsFormik.values.email}
                        type='text'
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
                        className='border-none bg-[#D8D8D8] text-[#FFFFFF] text-[24px] w-[400px] h-[65px] mt-[25px] rounded-[40px] focus:ring-[3px] focus:border-none focus:outline-none'
                     >
                        Log in
                     </Button>
                     <div className='mt-[30px] text-[18px]'>
                        <p className='text-[#AFAEAE]'>New to App? <a href='#' onClick={(e: any) => {
                           e.preventDefault();
                           props.setMode('register')
                        }} className='text-[#FEAE67]'>Sign Up</a></p>
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}
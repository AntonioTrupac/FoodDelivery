import  React, {FC} from 'react';
import {Form, Formik, FormikProps} from "formik";
import {CustomInput} from "../../components/input/CustomInput";
import {Button} from "../../components/button/Button";
import {Link} from "react-router-dom";

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

export const Register: FC = () => {
   return (
      <div>
         <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
               alert(JSON.stringify(values, null, 2));
               actions.setSubmitting(false);
            }}
         >
            {(props: FormikProps<Values>) => (
               <Form>
                  <div className='flex flex-col justify-center items-center mt-[10px] w-[100%]'>
                     <CustomInput
                        name='firstName'
                        type='text'
                        placeholder='First name'
                        value={props.values.firstName}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={props.handleChange}/>
                     <CustomInput
                        name='lastName'
                        type='text'
                        placeholder='Last name'
                        value={props.values.lastName}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={props.handleChange}/>
                     <CustomInput
                        name='age'
                        type='text'
                        placeholder='Age'
                        value={props.values.age}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={props.handleChange}/>
                     <CustomInput
                        name='email'
                        type='text'
                        placeholder='Email'
                        value={props.values.email}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={props.handleChange}/>
                     <CustomInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={props.values.password}
                        className='w-[320px] h-[50px] border-b-[1px] border-[#AFAEAE] mb-[10px] focus:outline-none'
                        onChange={props.handleChange}/>
                     <Button
                        type='submit'
                        className='border-none bg-[#D8D8D8] text-[#FFFFFF] w-[400px] h-[65px] mt-[25px] rounded-[40px] focus:ring-[3px] focus:border-none focus:outline-none'
                     >
                        Sign up
                     </Button>
                     <div className='mt-[30px] text-[18px]'>
                        <p className='text-[#AFAEAE]'>New to App? <Link to='/register' ><span className='text-[#FEAE67]'>Sign Up</span></Link></p>
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}
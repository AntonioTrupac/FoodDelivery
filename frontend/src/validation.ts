import * as yup from "yup";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const registerValidationSchema = yup.object().shape({
    firstName: yup.string().min(2,"First name too short!").max(30, "First name too long!").required("Field is required!"),
    lastName: yup.string().min(2,"Last name too short!").max(30, "Last name too long!").required("Field is required!"),
    phoneNumber: yup.string().required("Field is required!"),
    email: yup.string().email('Invalid email!').matches(EMAIL_REGEX, "Invalid email!").required('Field is required!'),
    password: yup.string().min(8, "Minimum number of charachters is 8").max(40, "Maximum number of charachters is 40!").required("Field is required!"),
});

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').matches(EMAIL_REGEX, "Invalid email!").required('Field is required!'),
    password: yup.string().max(255, "Maximum number of charachters is 255!").required("Field is required!"),
})

export const editUserValidation = yup.object().shape({
    firstName: yup.string().min(2,"First name too short!").max(30, "First name too long!").notRequired(),
    lastName: yup.string().min(2,"Last name too short!").max(30, "Last name too long!").notRequired(),
    email: yup.string().email('Invalid email!').matches(EMAIL_REGEX, "Invalid email!").required("Email is required!"),
    phoneNumber: yup.string().notRequired(),
});
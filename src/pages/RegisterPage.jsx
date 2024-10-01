import React, { useEffect, useState } from 'react'
import { Typography, TextField, Box, InputAdornment, IconButton } from "@mui/material"
import {MdVisibility, MdVisibilityOff} from "react-icons/md"
import Form from '../components/ui/Form'
import * as Yup from "yup"
import { useFormik } from "formik"
import { NavLink } from 'react-router-dom'
import { handleRegister } from '../redux/features/RegisterSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
// import { useSelector } from 'react-redux'


const RegisterPage = () => {
    const dispatch = useDispatch()
    // const {user} = useSelector((store)=> store.register)
    const [showPassword, setShowPassword] = useState(false)
    const validateSchema = Yup.object({
        firstname: Yup.string().required("Required Field"),
        lastname: Yup.string().required("Required Field"),
        name: Yup.string(),
        email: Yup.string().required("Required Field").matches(/^[a-zA-Z0-9]+@gmail\.com$/, "invalid email address"),
        password: Yup.string().required("Required Field").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, "invalid password"),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const handleForm =  () => {
        dispatch(handleRegister(formik.values)).then(data => {
            console.log(data)
            if (data.payload == undefined) {
                toast.error("User is already in use", {
                    className:'bg-black text-white'
                })
            } else {
                toast.success("registered successfully", {
                    className:'bg-black text-white'
                })
            }
        })
    }

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            name:'',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: validateSchema,
        onSubmit: handleForm
    })
    
    useEffect(() => {
        formik.setFieldValue('name', `${formik.values.firstname} ${formik.values.lastname}`)
    }, [formik.values.firstname, formik.values.lastname])
    
    const handleClickShowPassword = (e) => {
        
        setShowPassword(!showPassword)
    }
    return (
        <Form formTitle="Create your account" onSubmit={formik.handleSubmit}>
            <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between', gap:'10px'}} >
                <Box component='div' sx={{width: '50%'}} >
                    <TextField label='First name' variant='standard' id='firstname' name='firstname' className='w-full' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {/* handle error validation */}
                    {formik.touched.firstname && formik.errors.firstname ? <p className='text-red-600 font-inter text-xs font-bold mt-2' > {formik.errors.firstname} </p> : null}
                </Box>
                <Box component='div' sx={{flex:'1'}} >
                    <TextField label='Last name' variant='standard' id='lastname' name='lastname' className='w-full' onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                    {formik.touched.lastname && formik.errors.lastname ? <p className='text-red-600 font-inter text-xs font-bold mt-2' > {formik.errors.lastname} </p> : null}
                </Box>
            </Box>
            <Box component='div'>
                <TextField label='Email' variant='standard' id='email' name='email' className='w-full' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <p className='text-red-600 font-inter text-xs font-bold mt-2' > {formik.errors.email} </p> : null}
            </Box>
            <Box component='div' sx={{position:'relative'}} >
                <TextField label='Password' type={showPassword? "text": "password"} variant='standard' id='password' name='password' className='w-full' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password ? <p className='text-red-600 font-inter text-xs font-bold mt-2' > {formik.errors.password} </p> : null}
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        sx={{position:'absolute', right:'0', top:10, color:'#fff'}}
                    >
                    {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={ 20} /> }
                    </IconButton>
            </Box>
            <Box component='div' sx={{position:'relative'}} >
                <TextField label='passwordConfirm' variant='standard' id='passwordConfirm' name='passwordConfirm' className='w-full' onChange={formik.handleChange} onBlur={formik.handleBlur} type={showPassword? "text": "password"} />
                {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? <p className='text-red-600 font-inter text-xs font-bold mt-2' > {formik.errors.passwordConfirm} </p> : null}
                <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        sx={{position:'absolute', right:'0', top:10, color:'#fff'}}
                    >
                        {showPassword? <MdVisibilityOff size={20} /> : <MdVisibility size={20}/> }
                    </IconButton>
            </Box>
            <Box component='div' >
                <Typography component="p" sx={{ fontSize: '12px' }} >
                    Already have an account? <NavLink to='/signin'>Sign in</NavLink>
                </Typography>
            </Box>
            <Box component="div" >
                <Typography component="p" sx={{fontSize:'12px'}} >
                    By creating an account you agree to our <a href="#" className="text-blue-600" >Terms of Use</a> and <a href="#" className="text-blue-600" >Privacy Policy</a>.
                </Typography>
            </Box>
        </Form>


    )
}

export default RegisterPage

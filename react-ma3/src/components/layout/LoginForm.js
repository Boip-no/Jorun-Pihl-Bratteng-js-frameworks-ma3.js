/* 

Use react-hook-form and yup to create and validate a form with two inputs:
username - required
password - required with a minimum length of 4 characters

*/

import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    username: yup
        .string()
        .username("Please enter a valid username")
        .required("username is required"),
    password: yup
        .string()
        .password("Please enter a valid password")
        .required("Password is requierd")
});

function LoginForm() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    
    function onSubmit(data) {
        console.log("data", data);
    }
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={register} />
                {errors.username && <p>Username is required</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" placeholder="Enter your password" ref={register} />
                {errors.password && <p>Password is required</p>}
            </Form.Group>

        </Form>
    );
}

export default LoginForm;
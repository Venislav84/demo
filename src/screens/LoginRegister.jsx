import { useState } from "react"
import Form from "../components/form/Form"
import Button from "../components/button/Button"

const LoginRegister = () => {

    const [isLogin, setIsLogin] = useState(true)
    const toglleHandlerForm = (e) => {
        e.preventDefault();
        setIsLogin(!isLogin)
    };
    const inputsLogin = [
        {
            id: '1',
            name: 'email',
            type: 'emial',
            onChange: () => {},
            placeholder: 'Your email...'
        },
        {
            id: '2',
            name: 'password',
            type: 'password',
            onChange: () => {},
            placeholder: 'Enter password...'   
        },
        ];
    const inputsRegister = [
        {
            id: '3',
            name: 'email',
            type: 'emial',
            onChange: () => {},
            placeholder: 'Your email...'
        },
        {
            id: '4',
            name: 'password',
            type: 'password',
            onChange: () => {},
            placeholder: 'Enter password...'   
        },
        {
            id: '5',
            name: 're-password',
            type: 'password',
            onChange: () => {},
            placeholder: 'Repeat password...'
        },
        ];

  return (
    <>
    <h1>{isLogin ? 'Login' : 'Register'}</h1>
    <Form formData = {isLogin ? inputsLogin : inputsRegister}>
        <div style={{margin: '10 px', display: 'flex', gap: '10px'}}>
            <Button type={'m'} text = {isLogin ? 'Create Account' : 'Go to Login'} onClick ={toglleHandlerForm} backgrounColor = {'grey'} color ={'black'}/>
            <Button type={'m'} text = {isLogin ? 'Login' : 'Register'} backgrounColor = {'green'} color ={'black'}/>
        </div>
    </Form>
    </>
  )
}

export default LoginRegister
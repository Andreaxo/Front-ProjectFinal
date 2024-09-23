import { UserOutlined } from '@ant-design/icons';
import { Button, Input, Flex } from 'antd';
import '../../styles/InputStyles.css';
import '../../styles/Login.css';

import Swal from 'sweetalert2';
import { LOGIN } from '../../Const.js';
import axios, { Axios } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    //Navigate
    const navigate = useNavigate();

    
    //UseState for UserInput
    const [inputUser,setInputUser] = useState('')

    const onChangeUser = (e) => {
        setInputUser(e.target.value);
    }

    //UseState for PassWordInput

    const [inputPass,setInputPass] = useState('');

    const onChangePass = (e) => {
        setInputPass(e.target.value)
    }

    console.log('Usuario', inputUser);
    console.log('Password:',inputPass);

    const userData = () => {
        if (!inputUser || !inputPass) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos vacíos',
                text: 'Por favor completa todos los campos.',
            });
            return;
        }
        axios({ 
            method: 'post',
            url: LOGIN,
            data: {
                email: inputUser,
                password: inputPass
            }
        }).then((response)=> {
            
            console.log(response.data.token)
            const token = response.data.token
            if(token){
                sessionStorage.setItem('token',token)
                
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `¡Se ha iniciado sesión!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/Home');
            }

            
        })
    }


    return(
        <>
        
        <div className="container">
        <h1>¡Bienvenido a tu login!</h1>
        <br/>
        <Input size="large" placeholder="Ingresa tu usuario" prefix={<UserOutlined />} className='custom-input no-box-shadow' 
        onChange={onChangeUser}
        name='email'
        value={inputUser}
        />
        <br/>
        <Input size='large' placeholder='Ingresa tu contraseña' prefix={<UserOutlined />} className='custom-input no-box-shadow'
        type='Password'
        onChange={onChangePass}
        value={inputPass}
        />
        <Button type="primary" onClick={userData} >Iniciar Sesión</Button>
        </div>

        </>
    )}
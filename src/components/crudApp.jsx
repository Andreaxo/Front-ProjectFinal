import { Button, Flex, Space} from 'antd';
import axios from 'axios';
import { URL } from '../Const.js';
import { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/crudApp.css';
import Navbar from '../ui/NavBar.jsx';


export const CrudApp = () => {

    // Valor del input de Usuario
    const [inputUsuario, setInputUsuario] = useState('');

    //Obtener valores del input
    const onInputChange = (e) => {
        setInputUsuario(e.target.value);
    }

    // Valor del input de Email
    const [inputEmail, setInputEmail] = useState('');

    const onInputChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }

    const NewUser = () => {
        console.log("Create User - Check Your Password");
        axios({
            method: 'post',
            url: URL,
            data: {
                name: (inputUsuario),
                email: (inputEmail)
            }
        }).then(function(response){
            if(response.status == 201 || response.status == 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${response.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });

                }
                })
                .catch(error => {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error}`
                  });
                });
              };
    
    
    return(
        <>
        <Navbar />
        <h1>¡Welcome New User!</h1>
        <input
        type="text"
        placeholder="Ingrese un usuario"
        value={inputUsuario}
        onChange={onInputChange}
        />
        <br/> <br/>
        <input
        type="text"
        placeholder="Ingrese un email"
        value={inputEmail}
        onChange={onInputChangeEmail}
        />

        <br/> <br/>

        <Space style={{ display: 'flex', justifyContent: 'center', width: '100%' }} wrap>
        <Flex gap="small" wrap>
            <Button type='primary' onClick={() => NewUser()}> New User</Button>
            <br/>
        </Flex>
        </Space>
</>
    )
}
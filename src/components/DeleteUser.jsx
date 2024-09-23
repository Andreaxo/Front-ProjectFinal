import { URL } from '../Const.js';
import { Button, Flex, Space} from 'antd';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';
import '../styles/DeleteUser.css'
import Navbar from '../ui/NavBar.jsx';

export const DeleteUser = () =>{
    const [inputId, setInputId] = useState('');

    const onInputID = (e) => {
        setInputId(e.target.value)
    }

    console.log(inputId)
    const DeleteUsers = () => {
        
        axios({
            method: 'DELETE',
            url: `${URL}${inputId}`
        }).then(function(response){
            if(response.status == 201 || response.status == 200){
                Swal.fire({
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
                    text: `${error.response?.data?.message || error.message}`
                  });
                });
              };


    return(
        <>
        <Navbar />
        <h1>¡Welcome to delete user!</h1>

        <input
        placeholder='Ingresa un ID'
        onChange={onInputID}
        value={inputId}
        />
        <br/> <br/>
        <Space style={{ display: 'flex', justifyContent: 'center', width: '100%' }} wrap>
        <Flex gap="small" wrap>
        <Button type='primary' onClick={DeleteUsers}> Delete User</Button>
            <br/>
        </Flex>
        </Space>
        </>

    )
}
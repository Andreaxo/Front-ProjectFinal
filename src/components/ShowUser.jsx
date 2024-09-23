import axios from 'axios';
import { URL } from '../Const.js';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../ui/NavBar.jsx';

// Imports para la tabla
import { Table, Space, Button, Flex } from 'antd';

export const ShowUser = () => {
    const [data, setData] = useState([]); // Estado para almacenar los datos
    const [input, setInput] = useState(''); // Estado para el input
    const [filteredData, setFilteredData] = useState([]); // Estado para los datos filtrados

    const onInputChangeUsers = (e) => {
        const value = e.target.value;
        setInput(value);

        // Filtrar datos según el input
        const filtered = data.filter(user => 
            user.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const ShowData = () => {
        axios({
            method: 'GET',
            url: URL
        }).then(function(response) {
            console.log(response.data); // Verifica la respuesta
            let DataSet = [];
    
            // Supongamos que los datos están en una propiedad 'users'
            if (response.data && Array.isArray(response.data.users)) {
                DataSet = response.data.users.map((item) => ({
                    key: item.id,
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    createdAt: item.createdAt
                }));
            } else if (Array.isArray(response.data)) {
                // Si la respuesta es un array directamente
                DataSet = response.data.map((item) => ({
                    key: item.id,
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    createdAt: item.createdAt
                }));
            } else {
                console.error("La respuesta no es un array ni contiene la propiedad 'users'");
            }
    
            console.log(DataSet); // Verifica el DataSet
            setData(DataSet);
            setFilteredData(DataSet); // Inicializa el estado de datos filtrados
            Swal.fire({
                position: "center",
                icon: "success",
                title: response.data.message || 'Data fetched successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(error => {
            console.error(error); // Muestra el error en la consola
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message
            });
        });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email)
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        }
    ];
        
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
        <Navbar />
            <h1>This is our people!</h1>
            <p>Know them.</p>

            <input
                type='text'
                placeholder='Ingrese un usuario'
                value={input}
                onChange={onInputChangeUsers}
            />

            <br /><br />
            <Space style={{ display: 'flex', justifyContent: 'center', width: '100%' }} wrap>
                <Flex gap="small" wrap>
                    <Button type='primary' onClick={ShowData}> Let know the users</Button>
                    <br />
                </Flex>
            </Space>
            <br />

            <Table
                columns={columns}
                dataSource={filteredData}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </>
    );
}

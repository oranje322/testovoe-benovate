import React, {useEffect, useState} from "react";
import {DataGrid} from '@material-ui/data-grid';
import Modal from "./Modal";


const columns = [
    {field: 'firstName', headerName: 'Имя', flex: 0.25, headerAlign: 'center',  disableClickEventBubbling: true},
    {field: 'lastName', headerName: 'Фамилия', flex: 0.25, headerAlign: 'center', disableClickEventBubbling: true},
    {field: 'group', headerName: 'Группа', flex: 0.5, headerAlign: 'center', disableClickEventBubbling: true}
]

const apiURL = 'https://my.api.mockaroo.com/users?key=73283ce0'

const Users = () => {

    const [users, setUsers] = useState([])

    const [modalVisible, setModalVisible] = useState(false)



    useEffect(() => {
        fetch(apiURL).then(response => response.json()).then(r => setUsers(r))
    }, [])

    const addUser = (data) => {
        let newUser = {
            id: users.length +1,
            firstName: data.firstNameInput,
            lastName: data.lastNameInput,
            group: data.groupInput
        }
        setUsers(prev => {
            return [...prev, newUser]
            }
        )
        toggleVisibleModal()
    }

    const toggleVisibleModal = () => {
        setModalVisible(prev => !prev)
    }

    return (
        <div className={'users'}>
            <h2>Список пользователей</h2>
            <button onClick={toggleVisibleModal} className={'btn-add'}>Добавить пользователя</button>
            <div style={{height: 800, width: '100%'}}>
                <DataGrid  rows={users} columns={columns}/>
            </div>
            {
                modalVisible && <Modal addUser={addUser}
                                       modalVisible={modalVisible}/>
            }
        </div>
    )
}

export default Users
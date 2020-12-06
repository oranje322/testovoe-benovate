import React, {useState} from "react";


const Modal = ({addUser, modalVisible}) => {
    const [firstNameInput, setFirstNameInput] = useState('')
    const [lastNameInput, setLastNameInput] = useState('')
    const [groupInput, setGroupInput] = useState('')

    const onClickAddUser = () => {
        if(firstNameInput !== '' && lastNameInput !== '' && groupInput !== '') {
            let data = {
                firstNameInput,
                lastNameInput,
                groupInput
            }
            addUser(data)
        } else {
            alert('Заполните данные')
        }

    }

    return (
        <div className={`modal ${modalVisible ? 'open' : ''}`}>
            <h3 className="modal-title">Добавить пользователя</h3>
            <p className="text">Имя</p>
            <input value={firstNameInput} onChange={(e) => setFirstNameInput(e.target.value)} className={'modal-input'} type="text"/>
            <p className="text">Фамилия</p>
            <input value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)} className={'modal-input'} type="text"/>
            <p className="text">Группа</p>
            <input value={groupInput} onChange={(e) => setGroupInput(e.target.value)} className={'modal-input'} type="text"/>
            <button onClick={onClickAddUser}  className="btn-add">Добавить</button>
        </div>
    )
}

export default Modal
import './Register.css';
import '../font.css';
import {Link} from 'react-router-dom';
import { MemberPopup } from '../../components/memberpopup/Memberpopup';
import { useState } from 'react';

import 'axios';


export default function Register() {
    const[modalInfoIsOpen, setModalInfoOpen] = useState(false);
  return (
        <div className="Register">
            <h1 className='Register-title'>Регистрация</h1>
            <form className='Register-form'>
                <input className='Register-form__input' type='text' required placeholder='Название команды'></input>
                <input className='Register-form__input' type='email' required placeholder='Электронная почта'></input>
                <input className='Register-form__input' type='text' required placeholder='Логин'></input>
                <input className='Register-form__input' type='password' required placeholder='Пароль'></input>
                <input className='Register-form__input_file' type='file' ></input>
                <button className='Register-form__button' 
                    type='button'
                    onClick={() => setModalInfoOpen(true)}
                >Добавить участника</button>
                <MemberPopup
                isOpen={modalInfoIsOpen}
                onClose={() => setModalInfoOpen(false)}>
                    <h2>Добавить участника</h2>
                    <input  className='Register-form__input' type='text' placeholder='Имя участника'></input>
                    <textarea   className='Register-form__textarea' placeholder='Описание'></textarea>
                    <input className='Register-form__input_file' type='file'></input>
                    <button className='Register-form__button' type='button'>Добавить</button>
                </MemberPopup>
                <button className='Register-form__button' type='submit'>Зарегистрироваться</button>
                <div className='Register-acc'>
                    <p className='Register-acc__p'>Уже есть аккаунт?</p>
                    <Link to="/enter" className='Register-acc__link'>
                    <p className='Register-acc__p_link'>Войти</p>
                    </Link>
                </div>
            </form>
        </div>
  );
}


import './Enter.css';
import '../font.css';
import {Link} from 'react-router-dom';

export default function Enter() {
  return (
        <div className="Enter">
            <h1 className='Enter-title'>Вход</h1>
            <form className='Enter-form'>
                <input className='Enter-form__input' type='text' required placeholder='Логин'></input>
                <input className='Enter-form__input' type='password' required placeholder='Пароль'></input>
                <Link to="/main" className='Enter-acc__link'>
                    <button className='Enter-form__button' type='submit'>Войти</button>
                </Link>
                <div className='Enter-acc'>
                    <p className='Enter-acc__p'>Нет аккаунта?</p>
                    <Link to="/" className='Enter-acc__link'>
                    <p className='Enter-acc__p_link'>Зарегистрироваться</p>
                    </Link>
                    
                </div>
            </form>
        </div>
  );
}

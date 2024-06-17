import './Main.css';
import { Teams } from '../../components/teams/Teams';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

export default function Main() {

    return (
        <div className='Main'>
            <div className='Main-header'>
                <Header></Header>
                <div className='button-container'>
                    <Link to='/enter'>
                        <button className='button'>Личный кабинет</button>
                    </Link>
                </div>
            </div>
            <div className="Main-main">
                <div className='carousel'>
                    <Teams>
                    </Teams>
                </div>
            </div>
                
        </div>
    );
}
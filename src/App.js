import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import Enter from './pages/enter/Enter';
import Main from './pages/main/Main';
import TeamsProfile from './pages/teamsProfile/TeamsProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Register}/>
        <Route path='/enter' Component={Enter}/>
        <Route path='/main' Component={Main}/>
        <Route path='/teamsprofile' Component={TeamsProfile}></Route>
      </Routes>
    </BrowserRouter>
  );
}
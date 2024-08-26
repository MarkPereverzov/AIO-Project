import {HashRouter, Routes, Route} from 'react-router-dom';
import {BadHabits, Dream, Budget, Nutrion, Job, MainPage, Smoking } from '../../components/pages';

export function AppRouter()
{
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/BadHabits' element={<BadHabits />}></Route>
                <Route path='/Dream' element={<Dream />}></Route>
                <Route path='/Budget' element={<Budget />}></Route>
                <Route path='/Nutrion' element={<Nutrion />}></Route>
                <Route path='/Job' element={<Job />}></Route> 
                <Route path='/Smoking' element={<Smoking />}></Route> 
            </Routes>
        </HashRouter>
    );
}
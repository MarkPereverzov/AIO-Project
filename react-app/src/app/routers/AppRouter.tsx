import {HashRouter, Routes, Route} from 'react-router-dom';
import { NoSmoking, Dream, Budget, Nutrion, Job, MainPage } from '../../components/pages';

export function AppRouter()
{
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/NoSmoking' element={<NoSmoking />}></Route>
                <Route path='/Dream' element={<Dream />}></Route>
                <Route path='/Budget' element={<Budget />}></Route>
                <Route path='/Nutrion' element={<Nutrion />}></Route>
                <Route path='/Job' element={<Job />}></Route> 
            </Routes>
        </HashRouter>
    );
}
import {HashRouter, Routes, Route} from 'react-router-dom';
import {BadHabits, Dream, Budget, Nutrion, Job, MainPage, Smoking, Profile } from '../../components/pages';
import GoogleCallback from '../../components/widgets/GoogleCallback/GoogleCallback';

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
                <Route path='/Profile' element={<Profile />}></Route>
                <Route path='/google/callback' element={<GoogleCallback />}></Route> 
            </Routes>
        </HashRouter>
    );
}
import React from "react";
import { useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { BadHabits, Dream, Budget, Nutrion, Job, MainPage, Smoking, Profile } from '../../components/pages';
import { GoogleCallback, AppleCallback } from "../../components/pages/Callbacks";
import { useToken } from "../../components/context";

export function AppRouter()
{
    const { loadTokens } = useToken();

    useEffect(() => {
        loadTokens();
    }, [loadTokens]);

    return(
        <>
            <BrowserRouter>
                <Routes >
                    <Route path='/google/callback' element={<GoogleCallback />}></Route>
                    <Route path='/apple/callback' element={<AppleCallback />}></Route>
                </Routes>
            </BrowserRouter>
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
                </Routes>
            </HashRouter>
        </>
    );
}
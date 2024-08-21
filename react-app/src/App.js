import './App.css';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';
import { useState } from 'react';

function Card(props){
  return (
    <NavLink to={`/${props.address}`}>
      <div class="card">
        <div class="content">
          <img src={`./img/${props.image}.png`}/>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </NavLink>
  );
}

function Main() {
  return (
    <div>
      <penis class="penis">
        <Card address="NoSmoking" image="question" title="Сколько я держусь без курения?" text="Давай проверим твою выдержку и подсчитаем, сколько денег ты сумел сэкономить."></Card>
        <Card address="Dream" image="question" title="Что с моим сном?" text="Сон играет важную роль в жизни. Пора выяснить, насколько крепок твой сон."></Card>
        <Card address="Budget" image="question" title="На что уходит мой бюджет?" text="Считается некрасивым заглядывать в чужой кошелек, но с твоего разрешения мы это все-таки сделаем."></Card>
        <Card address="Nutrion" image="question" title="Чем же я питаюсь?" text="Пришло время обратить внимание на питание, и мы поможем тебе в этом."></Card>
        <Card address="Job" image="question" title="Мне пора на работу?" text="Теперь тебе не нужно беспокоиться о том, что опоздаешь на работу — мы напомним тебе вовремя."></Card>
        <Card address="NoSmoking" image="question" title="Сколько я воздерживаюсь?" text="Воздержание — личное дело каждого, и мы обещаем сохранить это в тайне."></Card>
      </penis>
    </div>
  );
}

function NoSmoking() {
  return (
    <div>
      <penis class="penis">
        <h1>NoSmoking</h1>
        <NavLink to='/'>Go to Main</NavLink>
      </penis>
    </div>
  );
}

function Dream() {
  return (
    <div>
      <penis class="penis">
        <h1>Dream</h1>
        <NavLink to='/'>Go to Main</NavLink>
      </penis>
    </div>
  );
}

function Budget() {
  return (
    <div>
      <penis class="penis">
        <h1>Budget</h1>
        <NavLink to='/'>Go to Main</NavLink>
      </penis>
    </div>
  );
}

function Nutrion() {
  return (
    <div>
      <penis class="penis">
        <h1>Nutrion</h1>
        <NavLink to='/'>Go to Main</NavLink>
      </penis>
    </div>
  );
}

function Job() {
  return (
    <div>
      <penis class="penis">
        <h1>Job</h1>
        <NavLink to='/'>Go to Main</NavLink>
      </penis>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/NoSmoking' element={<NoSmoking />}></Route>
            <Route path='/Dream' element={<Dream />}></Route>
            <Route path='/Budget' element={<Budget />}></Route>
            <Route path='/Nutrion' element={<Nutrion />}></Route>
            <Route path='/Job' element={<Job />}></Route> 
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;

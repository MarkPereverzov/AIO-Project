import React, { useState } from 'react';
import { Offcanvas, Button, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { FaMoneyBillWave, FaBed, FaBriefcase, FaUtensils, FaSmoking, FaBars, FaChevronRight } from 'react-icons/fa';
import './Menu.css';

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [showHabits, setShowHabits] = useState(false); // состояние для показа элементов вредных привычек

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleHabits = () => setShowHabits(!showHabits); // функция для переключения показа вредных привычек

  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => setShowSidebar(true);
  const handleCloseSidebar = () => setShowSidebar(false);

  return (
    <>
      {/* Кнопка для открытия меню */}
      <Button className="menu-button" onClick={handleShow}>
        <FaBars />
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{ width: '250px' }}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link onClick={toggleHabits} style={{ cursor: 'pointer' }}>
                    <FaSmoking className="me-2" />Зависимости
                    <FaChevronRight  className="chevron-icon" style={{ transform: showHabits ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                </Nav.Link>

                {showHabits && (
                <div className="sidebar-content">
                    <Nav.Link address="/Health">Курение</Nav.Link>
                    <Nav.Link href="/alcohol">Алкоголь</Nav.Link>
                    <Nav.Link href="/drugs">Наркотики</Nav.Link>
                    <Nav.Link href="/sweets">Сладкое</Nav.Link>
                    <Nav.Link href="/coffee">Кофе</Nav.Link>
                    <Nav.Link href="/porn">Порно</Nav.Link>
                </div>
                )}

                <Nav.Link href="/budget"><FaMoneyBillWave className="me-2" />Бюджет</Nav.Link>
                <Nav.Link href="/sleep"><FaBed className="me-2" />Сон</Nav.Link>
                <Nav.Link href="/work"><FaBriefcase className="me-2" />Работа</Nav.Link>
                <Nav.Link href="/nutrition"><FaUtensils className="me-2" />Питание</Nav.Link>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
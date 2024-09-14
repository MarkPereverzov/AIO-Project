import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';

interface OffcanvasNotificationsProps {
	showNotifications: boolean,
	handleClose: () => void,
	notificationsElements: React.ReactNode
}

export const OffcanvasNotifications = ({showNotifications, handleClose, notificationsElements}: OffcanvasNotificationsProps) => (
	<Offcanvas show={showNotifications} onHide={handleClose} placement="end" style={{ width: '300px' }}>
		<Offcanvas.Header closeButton>
			<Offcanvas.Title>Уведомления</Offcanvas.Title>
		</Offcanvas.Header>
		<Offcanvas.Body>
			<ListGroup >
				{notificationsElements}
			</ListGroup>
		</Offcanvas.Body>	
	</Offcanvas>
);
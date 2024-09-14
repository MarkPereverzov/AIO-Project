'use client';
import { useState } from 'react';

export const useNotification = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleShow = () => setShowNotifications(true);
  const handleClose = () => setShowNotifications(false);
  return { showNotifications, handleShow, handleClose };
}
'use client';
import { useState } from 'react';


export const useHeader = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    
    const handleShowRegisterModal = () => setShowRegisterModal(true);
    const handleCloseRegisterModal = () => setShowRegisterModal(false);
  
    return { showRegisterModal, handleShowRegisterModal, handleCloseRegisterModal };
};
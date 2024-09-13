// Block.js
import React from 'react';
import './Block.css';  // Убедитесь, что путь к CSS правильный
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Block({ title, subtitle }) {
  return (
    
    <div className="block">
      <div className="block-content">
        <div className="block-icon">
          <FaCircle />
        </div>
        <div className="block-header">{title}</div>
      </div>
      <div className="block-divider"></div>
      <div className="block-footer">{subtitle}</div>
    </div>
  );
}

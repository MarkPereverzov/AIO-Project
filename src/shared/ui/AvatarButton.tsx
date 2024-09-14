import React from 'react';
import { Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

export const AvatarButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button className="avatarButton" onClick={onClick}> {/* кнопка регистрации */}
      <FaUserCircle className="avatarIcon" />
    </Button>
  );
};

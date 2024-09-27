import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

interface AvatarButtonProps {
  userAvatar: string | undefined,
  onClick: () => void,
};

export const AvatarButton = ({ userAvatar, onClick }: AvatarButtonProps) => {
  return (
    <Button className="avatarButton" onClick={onClick}> {/* кнопка регистрации */}
      { userAvatar
        ? <Image src={ userAvatar } roundedCircle fluid />
        : <FaUserCircle className="avatarIcon" />
      }
    </Button>
  );
};

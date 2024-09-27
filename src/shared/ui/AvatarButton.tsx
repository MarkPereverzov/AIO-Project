import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

interface AvatarButtonProps {
  userAvatar: string | undefined,
  onClick: () => void,
};

export const AvatarButton = ({ userAvatar, onClick }: AvatarButtonProps) => {
  return (
    <>
      { !userAvatar
        ? <Button className="avatarButton" onClick={onClick}> {/* кнопка регистрации */}
            <FaUserCircle className="avatarIcon" />
          </Button>
        :  <Button className="avatarButton">
            <Image src={ userAvatar } roundedCircle fluid />
          </Button>
      }
    </>
  );
};
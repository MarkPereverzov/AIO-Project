import React from 'react';
import { Image } from 'react-bootstrap';
import { LuUser2 } from "react-icons/lu";
import { RoundButton } from './RoundButton';

interface AvatarButtonProps {
  userAvatar: string | undefined,
  onClick: () => void,
};

export const AvatarButton = ({ userAvatar, onClick }: AvatarButtonProps) => {
  return (
    <>
      { !userAvatar
        ? <RoundButton 
          size='lg'
          onClick={onClick}
          content={<LuUser2 size={35} />}
        /> 
        : <RoundButton 
          size='lg'
          onClick={onClick}
          content={<Image style={{width:'35px', height: '35px'}} src={userAvatar} roundedCircle fluid/>}
        /> 
      }
    </>
  );
};

// { !userAvatar
//         ? <Button className="avatarButton" onClick={onClick}> {/* кнопка регистрации */}
//         <FaUserCircle className="avatarIcon" />
//         </Button>
//       :  <Button className="avatarButton">
//           <Image src={ userAvatar } roundedCircle fluid />
//         </Button>
//     }
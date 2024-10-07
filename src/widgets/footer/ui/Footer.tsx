import React, { ReactNode, useState } from 'react';
import { useFooter } from '../model';
import { Subscribe } from '@/features/subscribe';
import { CreateTag } from '@/features/createTag';
import { PlayModal } from '@/features/playModal';
import { BiSolidCog, BiSolidCustomize, BiSolidRightArrow, BiSolidPin } from "react-icons/bi";
import styles from '../Footer.module.css';

interface FooterProps {
  items: {icon: React.ReactElement, element: React.ReactElement}[];
}

export const Footer = ({ items }: FooterProps) => {
  const [modalVisibility, setModalVisibility] = useState<boolean[]>(
    new Array(items?.length).fill(false)
  );

  const handleShow = (index: number) => {
    const updatedVisibility = [...modalVisibility];
    updatedVisibility[index] = true;
    setModalVisibility(updatedVisibility);
  };

  const handleClose = (index: number) => {
    const updatedVisibility = [...modalVisibility];
    updatedVisibility[index] = false;
    setModalVisibility(updatedVisibility);
  };

  return (
    <div>
      {items?.map((item, index) => (
        <div key={index}>
          {/* Button to open the respective modal */}
          <button className={styles.footerButton} onClick={() => handleShow(index)}>
            {React.cloneElement(item.icon,{})}
          </button>

          {React.cloneElement(item.element, {
            show: modalVisibility[index],
            onClose: () => handleClose(index),
          })}
        </div>
      ))}
    </div>
  );
};
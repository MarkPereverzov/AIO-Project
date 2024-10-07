import React, { ReactNode, useState } from 'react';
import { useFooter } from '../model';
import { Subscribe } from '@/features/subscribe';
import { CreateTag } from '@/features/createTag';
import { PlayModal } from '@/features/playModal';
import { BiSolidCog, BiSolidCustomize, BiSolidRightArrow, BiSolidPin } from "react-icons/bi";
import styles from '../Footer.module.css';

interface FooterProps {
  items: React.ReactElement[];
}

export const Footer = ({ items }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {items?.map((item, index) => (
        <>
          {React.cloneElement(item,{key: index})}
        </>
      ))}
    </footer>
  );
};
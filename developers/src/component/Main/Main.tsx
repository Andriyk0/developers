import React from 'react';
import './Main.scss';
import { Services } from './Services';
import { Shop } from './Shop';

export const Main:React.FC = () => {
  return (
    <>
      <Shop />
      <Services />
    </>
  )
};
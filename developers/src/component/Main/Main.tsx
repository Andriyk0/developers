import React from 'react';
import './Main.scss';
import { OnlineShop } from './OnlineShop';
import { Services } from './Services';
import { Shop } from './Shop';
import { Stages } from './Stages';

export const Main:React.FC = () => {
  return (
    <>
      <Shop />
      <Services />
      <Stages />
      <OnlineShop />
    </>
  )
};
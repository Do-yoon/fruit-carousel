'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header"
import FruitCarousel from "./layout/FruitCarousel";
import { useEffect, useState } from "react";
import { order } from "./const/const"

const inter = Inter({ subsets: ["latin"] });

const background = {
  "Banana": {
    /* banana */
    background: 'linear-gradient(225.35deg, #FFEE57 0%, #FFB930 97.53%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  "Coconut": {
    /* coconut */
    background: 'linear-gradient(225.35deg, #CEB7B4 0%, #B57049 97.53%)'
  },
  "Strawberry": {
    /* strawberry */
    background: 'linear-gradient(225.35deg, #FBC9C9 0%, #CF3939 97.53%)'
  },
  "Blackberry": {
    /* blackberry */
    background: 'linear-gradient(225.35deg, #DCB7F2 0%, #814C62 97.53%)'
  },
  "Kiwi": {
    /* kiwi */
    background: 'linear-gradient(225.35deg, #F2DBAF 0%, #9C9344 97.53%)'
  }
}

export default function RootLayout() {
  const [state, setState] = useState(0)

  return (
    <html lang="ko">
      <body className={inter.className}>
        <div id="click-area" onClick={e => setTimeout(setState((state+1) % 5))}></div>
        <div id="background-color-area" style={background[order[state]]} state={state}>
          <Header state={order[state]} setState={setState}/>
          <FruitCarousel state={order[state]}/>
        </div>
      </body>
    </html>
  );
}

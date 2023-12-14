"use client";

import BarraLateral from '@/components/BarraLateralComp/BarraLateral/BarraLateral';
import Body from '@/components/ConteudoComp/Body/Body';
import Header from '@/components/HeaderComp/Header/Header';
import Image from 'next/image'

// Base = https://dribbble.com/shots/23182689-TaskMaster-Task-Management-Dashboard

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col bg-sky-200">
      <div className="flex flex-row w-full h-full">
        <BarraLateral />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="p-4 w-full h-full flex flex-col overflow-hidden">
            <Body />
          </div>
        </div>
      </div>
    </main>
  )
}

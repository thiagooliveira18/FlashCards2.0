"use client";

import BarraLateral from '@/components/BarraLateral/BarraLateral';
import Header from '@/components/Header/Header';
import Image from 'next/image'

// Base = https://dribbble.com/shots/23182689-TaskMaster-Task-Management-Dashboard

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col bg-sky-200">
      <div className="flex flex-row w-full h-full">
        <BarraLateral />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="p-7 py-10 flex flex-col">
            conteúdo
          </div>
        </div>
      </div>
    </main>
  )
}

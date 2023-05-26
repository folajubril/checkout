"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import closeIcon from '/assets/close.svg';
import CardInfo from '@/components/cardInfo';
import OrderInfo from '@/components/orderInfo';

export default function Home() {
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal)
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
     {modal ? 
     <div className="bg-white h-fit w-[80vw] border-1px p-4 flex flex-col mt-8">
     <div>
      <Image
     onClick={toggleModal}
              src={closeIcon}
              alt="close"
              className="float-right cursor-pointer"
              width={30}
              height={24}
              priority
            />
            </div>
            <div className='flex gap-20 px-8 py-[30px] justify-between'>
            <CardInfo />
            <OrderInfo/>
            </div>
     </div> 
     : 
     <button onClick={toggleModal} className=' text-black h-[70px] w-[200px] mt-[40vh] border-none rounded shadow-md bg-[#39FF14] font-extrabold'>Open moDAL</button>
     }
    </main>
  )
}

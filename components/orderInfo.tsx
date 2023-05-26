import React from 'react'
import Image from 'next/image'
import apple from '../assets/apple.svg'
import reciept from '../assets/reciept.svg'
import mastercard from '../assets/mastercard.svg'
import wifi from '../assets/wifi.svg'
import chip from '../assets/chip.svg'

import './orderStyle.css'
export default function orderInfo() {
  return (
    <>
    <div className=" relative  flex flex-col items-center w-[30%]">
      <div className="w-[72px] h-12 bg-[#0000FF] opacity-[0.7] rounded-sm"/>
      <div className=" h-full w-full border-none bg-gray-100 mt-12 rounded-2xl pt-[55%]">
       
<div className="flex flex-col gap-2 mt-24 m-8 mb-4">
  <div className="flex items-center justify-between"><p className="text-gray-400">Company</p> <div className='text-[#202A44] justify-end font-semibold flex'> <Image
              src={apple}
              alt="apple"
              className=" cursor-pointer text-blue mr-2"
              width={14}
              height={10}
              priority
            /> Apple</div></div>
  <div className="flex items-center justify-between"><p className="text-gray-400">Order number</p> <span className='text-[#202A44] justify-end font-semibold'>12345678</span></div>
  <div className="flex items-center justify-between"><p className="text-gray-400">Product</p> <span className='text-[#202A44] justify-end font-semibold'>Macbook Air</span></div>
  <div className="flex items-center justify-between"><p className="text-gray-400">VAT(20%)</p> <span className='text-[#202A44] justify-end font-semibold'>$100.00</span></div>
</div>
<div className="flex items-center justify-between">
  <div className="circle ml-[-14px]"/>
  <hr className="dotted"/>
<div className="circle mr-[-14px]"/></div>
<div className="flex justify-between items-center m-8 my-[12px] ">
<div className=' flex flex-col gap-1'>
<p className="text-gray-400">You have to pay</p> 
<p className="text-[32px] text-[#202A44] font-semibold">549<span className="text-[16px] font-medium">.99</span><span className="pl-1 font-normal text-gray-400 text-[16px]">USD</span></p>
</div>
<Image
              src={reciept}
              alt="reciept"
              className=" cursor-pointer rotate-180"
              width={30}
              height={30}
              priority
            />
</div>

      </div>
    </div>
    <div className="shadow-lg flex flex-col text-[#202A44] p-[18px] pt-12 absolute w-[200px] top-[10rem]  ml-[58%]  bg-[white] opacity-[0.9] h-[300px] mr-1rem rounded-2xl">
<div className="flex justify-between">
<Image
              src={chip}
              alt="chip"
              className=" cursor-pointer"
              width={30}
              height={30}
              priority
            />
<Image
              src={wifi}
              alt="wifi"
              className=" cursor-pointer"
              width={30}
              height={30}
              priority
            />
</div>
<p className="pt-20 text-sm text-[#202A44]">Johnathan Michael</p>
<p className='text-[20px] leading-[44px] text-[#202A44] font-semibold'>•••• <span className="pl-2">3456</span></p>
<div className="flex justify-between items-center mt-6">
  <p className="text-[#202A44] text-sm font-semibold">09/12</p>
  <Image
              src={mastercard}
              alt="mastercard"
              className=" cursor-pointer"
              width={30}
              height={30}
              priority
            />
</div>
    </div>
    </>
 
  
   
  )
}

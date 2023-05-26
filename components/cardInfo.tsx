import React, { useState } from "react";
import Image from "next/image";
import editIcon from "../assets/edit.svg";
import check from "../assets/check.svg";
import pin from "../assets/pin.svg";
import mastercard from "../assets/mastercard.svg";
export default function CardInfo() {
  const [cardNumber, setCardNumber] = useState(
    "1111  -  2222  -  3333  -  4444"
  );
  const [edit, setEdit] = useState(false);

  const toggleEditMode = () => {
    setEdit(!edit);
  };
  return (
    <div className="text-black w-[70%] border-black">
      <div className="flex justify-between">
        <span className="text-black font-normal">[Logo]</span>
        <div className="flex items-center">
          <p className="bg-[#202A44] text-white flex justify-center rounded-md mx-1 h-[50px] w-[33px] items-center text-[24px]">
            01
          </p>
          :{" "}
          <p className="bg-[#202A44] text-white p-1 rounded-md mx-1 h-[50px] w-[33px] flex justify-center items-center text-[24px]">
            01
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-[18px] text-slate-600">Card Number</p>
          <p className="font-normal text-sm text-gray-400">
            Enter the 16 digit card number on the card.
          </p>
        </div>

        <div
          onClick={toggleEditMode}
          className="flex text-[#008AD8] cursor-pointer items-center font-bold"
        >
          <Image
            src={editIcon}
            alt="edit"
            className=" cursor-pointer text-blue mr-2"
            width={18}
            height={12}
            priority
          />
          <p className="text-sm">Edit</p>
        </div>
      </div>
      <div
        style={{
          borderColor: edit ? "#008AD8" : "#DCDCDC",
        }}
        className="mt-8 w-full text-gray-300 h-[70px] border-2 rounded-md p-[18px] flex justify-between"
      >
        <div className="text-[22px] flex">
          <Image
            src={mastercard}
            alt="mastercard"
            className="cursor-pointer mr-2"
            width={30}
            height={30}
            priority
          />{" "}
          {cardNumber}
        </div>
        <Image
          src={check}
          alt="check"
          className="text-blue cursor-pointer "
          width={30}
          height={30}
          priority
        />
      </div>
      <div className="flex justify-between mt-8 items-center">
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-[18px] text-slate-600">CVV Number</p>
          <p className="font-normal text-sm text-gray-400">
            Enter the 3 or 4 digit number on the card
          </p>
        </div>

        <div
          style={{
            borderColor: edit ? "#008AD8" : "#DCDCDC",
          }}
          className="w-[55%] text-gray-300 h-[70px] border-2 rounded-md p-[18px] flex justify-between"
        >
          <p className="text-[22px] w-[90%] text-[#202A44] text-center">123</p>
          <Image
            src={pin}
            alt="pin"
            className="text-blue cursor-pointer w-[10%]"
            width={30}
            height={30}
            priority
          />
        </div>
      </div>
      <div className="flex justify-between mt-8 items-center">
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-[18px] text-slate-600">Expiry Date</p>
          <p className="font-normal text-sm text-gray-400">
            Enter the expiration date of the card
          </p>
        </div>

        <div className="w-[55%] flex gap-2 justify-between items-center">
          <div
            style={{
              borderColor: edit ? "#008AD8" : "#DCDCDC",
            }}
            className="w-[40%] flex justify-center text-gray-300 h-[70px]   border-2 rounded-md p-[18px]"
          >
            <p className="text-[22px] text-[#202A44] text-center">12</p>
          </div>

          <p className="text-[22px] text-[#202A44] text-center">/</p>

          <div
            style={{
              borderColor: edit ? "#008AD8" : "#DCDCDC",
            }}
            className="w-[40%] flex items-center justify-center text-gray-300 h-[70px]  border-2 rounded-md p-[18px"
          >
            <p className="text-[22px] text-[#202A44] text-center ">12</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 items-center">
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-[18px] text-slate-600">Password</p>
          <p className="font-normal text-sm text-gray-400">
            Enter your dynamic password
          </p>
        </div>

        <div
          style={{
            borderColor: edit ? "#008AD8" : "#DCDCDC",
          }}
          className="w-[55%] text-gray-300 h-[70px]  border-2 rounded-md p-[18px] flex justify-between"
        >
          <p className="text-[22px]  text-[#202A44] text-center">••••••</p>
          <Image
            src={pin}
            alt="pin"
            className="text-blue cursor-pointer"
            width={30}
            height={30}
            priority
          />
        </div>
      </div>
      <button className="bg-[#0000FF] rounded-md text-center w-full h-[70px] mt-8 text-[22px] text-white opacity-[0.8]">
        Pay Now
      </button>
    </div>
  );
}

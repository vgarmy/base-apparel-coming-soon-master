import { useState } from 'react';
import logo from '../assets/logo.svg'
import rightBackground from '../assets/hero-desktop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[1440px] flex bg-white shadow-[0px_10px_37px_4px_rgba(0,0,0,0.31)] rounded-lg overflow-hidden">
          <div className="w-[60%] p-6 flex flex-col bg-[url('/assets/bg-pattern-desktop.svg')] bg-no-repeat bg-cover bg-center pl-[160px] pr-[220px] pt-[70px] pb-[165px]">
            <img
              src={logo}
              alt="Coming Soon"
              className='w-[160px] mb-[140px]'
            />
            <h1 className="text-6xl uppercase tracking-[1rem]">
              <span className="block font-light">We're</span>
              <span className="font-semibold">coming soon</span>
            </h1>
            <p className="text-gray-600 my-[50px]">
              Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <div class="relative w-full">
              <input
                type="email"
                placeholder="Email Address"
                class="w-full rounded-full py-[18px] px-[35px] border border-[hsl(0,6%,24%)] text-[hsl(0,36%,70%)] placeholder-[hsl(0,36%,70%)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                class="absolute right-0 top-1/2 -translate-y-1/2 rounded-full h-[60px] px-[48px] py-4 flex items-center justify-center bg-gradient-to-br from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)] hover:from-[hsl(0,80%,86%)] hover:to-[hsl(0,74%,74%)] shadow-lg transition"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl" />
              </button>
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src={rightBackground}
              alt="Coming Soon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

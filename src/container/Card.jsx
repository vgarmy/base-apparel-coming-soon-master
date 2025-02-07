import { useState } from 'react';
import logo from '../assets/logo.svg';
import rightBackground from '../assets/hero-desktop.jpg';
import mobilBackground from '../assets/hero-mobile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Card() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(email)); // Set error if email is invalid
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full md:w-[1440px] h-full md:h-auto flex flex-col md:flex-row bg-white shadow-lg overflow-hidden">
        <div className="w-full md:w-[60%] flex flex-col bg-[url('/assets/bg-pattern-desktop.svg')] bg-no-repeat bg-cover bg-center md:pl-[10rem] md:pr-[13rem] md:pt-[5rem] md:pb-[10rem]">
          <img
            src={logo}
            alt="Coming Soon"
            className="w-[100px] mt-[30px] ml-[30px] mb-[30px] md:w-[160px] md:mb-[140px] md:ml-0 md:mt-0"
          />
          {/* Hero Image for Mobile */}
          <div className="w-full h-64 md:hidden mb-[4rem]">
            <img src={mobilBackground} alt="Coming Soon" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col items-center md:items-start flex-grow">
            <h1 className="text-5xl md:text-6xl uppercase tracking-[0.5rem] md:tracking-[1rem] text-center md:text-left">
              <span className="block font-light text-[var(--desaturated-Red)]">We're</span>
              <span className="font-semibold text-[var(--Dark-Grayish-Red)]">coming soon</span>
            </h1>
            <p className="my-4 mx-[30px] md:mx-0 md:my-[50px] text-[var(--desaturated-Red)] text-center md:text-left">
              Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </p>

            {/* Input Field Wrapper */}
            <div className="w-full px-[30px] md:px-0 md:mt-0 mt-[2rem]">
              <div className="relative w-full mt-auto">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleValidation} // Validate when losing focus
                  className={`w-full rounded-full py-3 px-4 border-2 text-[var(--Dark-Grayish-Red)] placeholder-[var(--desaturated-Red)] focus:outline-none focus:ring-1
                ${error ? 'border-[hsl(0,60%,50%)] focus:ring-[hsl(0,60%,50%)]' : 'border-[var(--desaturated-Red)] focus:ring-[var(--Soft-Red)]'}`}
                />

                {/* Error Icon (Appears Only When Email is Invalid) */}
                {error && (
                  <div className="absolute right-[86px] md:right-[120px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-7 h-7 bg-[var(--Soft-Red)] text-white rounded-full shadow-md">
                    !
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleValidation} // Validate when clicking the button
                  className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full h-12 px-8 md:px-12 flex items-center justify-center bg-gradient-to-br from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)] hover:from-[hsl(0,80%,86%)] hover:to-[hsl(0,74%,74%)] shadow-lg hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl" />
                </button>

                {/* Validation Message (Absolutely Positioned to Prevent Layout Shift) */}
                <p className={`absolute font-bold left-4 top-full mt-2 text-[var(--Soft-Red)] text-sm ${error ? 'block' : 'hidden'}`}>
                  Please provide a valid email
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image for Desktop */}
        <div className="hidden md:block w-full md:w-[40%]">
          <img src={rightBackground} alt="Coming Soon" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Card;
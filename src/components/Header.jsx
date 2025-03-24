import { useEffect, useState } from 'react';
import AppBar from './AppBar';
import Logo from './Logo';
import Hero from './Hero';
import { hamburger } from '../images';
import { useWindowWidth } from '@react-hook/window-size';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [vis, setVis] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (width <= 640) {
      setVis(false);
    } else {
      setVis(true);
    }
  }, [width]);

  const toggleVis = () => {
    setVis((prev) => !prev);
    document.body.classList.toggle('overflow-y-hidden')
  };

  return (
    <header className="bg w-full p-5 mb-30 h-full pb-20 lg:pb-5 md:pb-1 sm:pb-0">
      <div className="container flex justify-between items-center mb-14 md:mb-5">
        <Logo />
        {vis && <AppBar />}
        {width <= 640 && (
          <button className="z-50" onClick={toggleVis}>
            {vis ? <IoClose className="fill-[#C4C4C4] w-6 h-6" /> : <img className='w-6 h-6' src={hamburger} alt="hamburger button" />}
          </button>
        )}
      </div>
      <div className='container'>
        <Hero />
      </div>
    </header>
  );
}

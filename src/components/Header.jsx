import { useEffect, useState } from 'react';
import Logo from './Logo';
import { hamburger } from '../images';
import AppBar from './AppBar';
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
  };

  return (
    <header className="bg w-full p-5">
      <div className="container flex justify-between items-center">
        <Logo />
        {vis && <AppBar />}
        {width <= 640 && (
            <button className='z-50' onClick={toggleVis}>{vis ? <IoClose className='fill-[#C4C4C4] w-6 h-6' /> : <img src={hamburger} alt="hamburger button" />}</button>
        )}
      </div>
    </header>
  );
}

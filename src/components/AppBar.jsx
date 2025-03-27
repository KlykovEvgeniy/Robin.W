import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { hamburger } from '../images';
import { IoClose } from 'react-icons/io5';

export default function AppBar() {
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
    document.body.classList.toggle('overflow-y-hidden');
  };

  const handleClick = () => {
    if (width > 640) {
      return;
    }
    document.body.classList.remove('overflow-y-hidden');
    setVis(false);
  };

  return (
    <>
      {vis && (
        <nav className="h-full sm:z-20 sm:flex sm:absolute sm:top-0 sm:right-0 sm:w-full sm:items-center sm:h-[110vh] sm:justify-center sm:bg-black">
          <ul className="flex space-x-16 items-center sm:flex-col sm:space-x-0 sm:items-center xl:space-x-5">
            <li>
              <a onClick={handleClick} className="link-nav" href="#exp">
                Experience
              </a>
            </li>
            <li>
              <a onClick={handleClick} className="link-nav" href="#work">
                Work
              </a>
            </li>
            <li>
              <a onClick={handleClick} className="link-nav" href="#photo">
                Photography
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href="#contact"
                className="link-nav bg-[#5221E6] h-full p-[38px] -ml-10 hover:bg-transparent hover:text-white sm:p-0 sm:bg-transparent sm:-m-0 xl:-m-3"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
      {width <= 640 && (
        <button className="z-50" onClick={toggleVis}>
          {vis ? (
            <IoClose className="fill-[#C4C4C4] w-6 h-6" />
          ) : (
            <img className="w-6 h-6" src={hamburger} alt="hamburger button" />
          )}
        </button>
      )}
    </>
  );
}
